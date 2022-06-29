const saltCurveCtx = document.getElementById("saltCurveChart")

const saltCurveChart = new Chart(saltCurveCtx, {
    type: 'scatter',
    data: {
        labels: [0, 0.2, 0.35, 0.45, 0.75, 0.85, 0.9, 0.95, 1.2, 1.4, 1.6, 1.7],
        datasets: [{
            label: 'Shampoo A',
            data: [0, 0.1, 0.2, 2, 7, 22, 28, 28, 15, 5, 1, 0],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.5,
            showLine: true
        }]
    },
    options: {
        plugins: {
            annotation: {
                annotations: {
                    desiredViscosityLine: {
                        type: 'line',
                        label: { enabled: true, content: "Desired Viscosity", position: 'start' },
                        xMin: 0,
                        xMax: 1.8,
                        yMin: 25,
                        yMax: 25,
                        backgroundColor: 'rgba(255, 99, 132, 0.25)'
                    },
                    currentViscosityLine: {
                        type: 'line',
                        label: { enabled: true, content: "Current Viscosity", position: 'start' },
                        xMin: 0,
                        xMax: 1.8,
                        yMin: 20,
                        yMax: 20,
                        backgroundColor: 'rgba(255, 99, 132, 0.25)'
                    }
                }
            }
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Concentration'
                }
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