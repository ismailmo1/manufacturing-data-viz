const saltCurveCtx = document.getElementById("saltCurveChart")
const desiredViscosityInput = document.getElementById("desiredViscosityInput");
const currentViscosityInput = document.getElementById("currentViscosityInput");

const concentrationVals = [0, 0.2, 0.4, 0.6, 0.9, 1.15, 1.2, 1.4, 1.6, 1.65, 1.9, 2.2, 2.4, 2.6]
const viscosityVals = [0, 0.1, 0.2, 1.0, 7, 22, 28, 35, 28, 22, 7, 1.0, 0.2, 0.1, 0]

// round to nearest 0.5
const maxXAxis = Math.ceil((Math.max(...concentrationVals) / 0.5)) * 0.5

const saltCurveChart = new Chart(saltCurveCtx, {
    type: 'scatter',
    data: {
        labels: concentrationVals,
        datasets: [{
            label: 'Shampoo A',
            data: viscosityVals,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
            showLine: true,
            cubicInterpolationMode: 'monotone'

        }]
    },
    options: {
        // animation: { duration: 1000 },
        plugins: {
            annotation: {
                animations: {
                    numbers: {
                        properties: [],
                        type: 'number'
                    }
                },


            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Concentration'
                },
                max: maxXAxis
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Viscosity'
                },
            }
        }
    }
});

function linearInterpolate(yVal, point1, point2) {
    // interpolare x val from y

    const [x1, y1] = point1
    const [x2, y2] = point2
    const slope = (y2 - y1) / (x2 - x1)
    // solve for x approximating gradient as linear
    // rearrange slope eqn. 
    // i.e. (yVal - y1) / (xVal - x1) == slope

    xVal = ((yVal - y1) / slope) + x1
    return xVal
}

function findSurroundingValues(datapoint, dataset) {
    // return [higher, lower] values in dataset array either side of datapoint    

    // copy array and sort 
    const sortedDataset = dataset.slice(0).sort((a, b) => a - b)

    // cant use forEach to return
    for (let i = 0; i < sortedDataset.length; i++) {
        if (sortedDataset[i] >= datapoint) {
            const higherVal = sortedDataset[i]
            const lowerVal = sortedDataset[i - 1]
            return [higherVal, lowerVal]
        }
    }
}

function getSurroundingPoints(yVal, yDataset, xDataset) {
    // get [higherPoint, lowerPoint] surrounding yVal

    // get surrounding yvalues
    [y2, y1] = findSurroundingValues(yVal, yDataset)
    // get idx of yVals
    const y2Idx = yDataset.indexOf(y2)
    const y1Idx = yDataset.indexOf(y1)
    // find corresponding xVals
    x1 = xDataset[y1Idx]
    x2 = xDataset[y2Idx]
    const point1 = [x1, y1]
    const point2 = [x2, y2]
    return [point2, point1]
}

function calculateConcentration(viscosity, viscosityDataset, concentrationDataset) {
    const [point2, point1] = getSurroundingPoints(viscosity, viscosityDataset, concentrationDataset)
    const xVal = linearInterpolate(viscosity, point1, point2)
    return xVal
}

function addInterpolationLine(viscosityValue, label, chart) {
    const conc = calculateConcentration(viscosityValue, viscosityVals, concentrationVals);
    const annotation = {
        drawTime: 'afterDraw',
        type: 'line',
        label: {
            enabled: true, content: `${label} Concentration`, position: 'center',
            backgroundColor: 'rgba(0, 0,0, 0.5)'
        },
        xMin: conc,
        xMax: conc,
        yMin: 0,
        yMax: viscosityValue,
    }

    chart.options.plugins.annotation.annotations[`${label} Concentration`] = annotation;
    chart.update()
}

function addViscosityLine(viscosityValue, label, chart) {
    const annotation = {
        type: 'line',
        label: { enabled: true, content: `${label} Viscosity`, position: 'start' },
        xMin: 0,
        xMax: maxXAxis,
        yMin: viscosityValue,
        yMax: viscosityValue,
        backgroundColor: 'rgba(255, 99, 132, 0.25)'
    }

    chart.options.plugins.annotation.annotations[`${label} Viscosity`] = annotation;
    chart.update()

}

// add input event handlers
desiredViscosityInput.max = Math.max(...viscosityVals)
desiredViscosityInput.min = Math.min(...viscosityVals)
currentViscosityInput.max = Math.max(...viscosityVals)
currentViscosityInput.min = Math.min(...viscosityVals)

desiredViscosityInput.addEventListener("input", (e) => {
    const viscosity = e.target.value;
    updateAnnotations(viscosity, "Required", saltCurveChart)
})

currentViscosityInput.addEventListener("input", (e) => {
    const viscosity = e.target.value;
    updateAnnotations(viscosity, "Current", saltCurveChart)
})


function calculateConcentrationDifference() {
    // add annotation line for difference
    const desiredViscosity = desiredViscosityInput.value
    const currentViscosity = currentViscosityInput.value
    if (currentViscosity && desiredViscosity) {
        const currentConc = saltCurveChart.options.plugins.annotation.annotations['Current Concentration'].xMax
        const requiredConc = saltCurveChart.options.plugins.annotation.annotations['Required Concentration'].xMax

        const diffAnnotation = {
            type: 'line',
            label: { enabled: true, content: `diff`, position: 'center' },
            xMin: currentConc,
            xMax: requiredConc,
            yMin: 5,
            yMax: 5,
            backgroundColor: 'rgba(255, 99, 132, 0.25)'
        }

        saltCurveChart.options.plugins.annotation.annotations['Concentration Difference'] = diffAnnotation;
        saltCurveChart.update()
        return
    }

}
function updateAnnotations(viscosity, label, chart) {
    if (viscosity) {
        addInterpolationLine(viscosity, label, chart);
        addViscosityLine(viscosity, label, chart)
        calculateConcentrationDifference();
        return
    }
    // clear up annotations if no viscosity
    chart.options.plugins.annotation.annotations[`${label} Concentration`] = null;
    chart.options.plugins.annotation.annotations[`${label} Viscosity`] = null;

    // remove diff annotation if either required or current vals are missing
    chart.options.plugins.annotation.annotations['Concentration Difference'] = null;

    chart.update()
}