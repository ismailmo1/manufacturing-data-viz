const beforeCtx = document.getElementById('beforeChart');
const afterCtx = document.getElementById('afterChart');
const vfData = [
    {
        "sequence": 1,
        "original_sequence": 5,
        "order_number": 805,
        "process_time": 122.03389830508475,
        "priority": 3,
        "dead_line": 0,
        "start_time": 0,
        "end_time": 122.03389830508475,
        "tardiness_flag": false,
        "tardiness_duration": 122.03389830508475
    },
    {
        "sequence": 2,
        "original_sequence": 6,
        "order_number": 806,
        "process_time": 238.41059602649008,
        "priority": 1,
        "dead_line": 10,
        "start_time": 122.03389830508475,
        "end_time": 360.44449433157484,
        "tardiness_flag": false,
        "tardiness_duration": 360.44449433157484
    },
    {
        "sequence": 3,
        "original_sequence": 1,
        "order_number": 801,
        "process_time": 258.99280575539569,
        "priority": 1,
        "dead_line": 600,
        "start_time": 360.44449433157484,
        "end_time": 619.43730008697048,
        "tardiness_flag": false,
        "tardiness_duration": 19.437300086970481
    },
    {
        "sequence": 4,
        "original_sequence": 2,
        "order_number": 802,
        "process_time": 130.43478260869566,
        "priority": 2,
        "dead_line": 700,
        "start_time": 619.43730008697048,
        "end_time": 749.87208269566611,
        "tardiness_flag": false,
        "tardiness_duration": 49.872082695666109
    },
    {
        "sequence": 5,
        "original_sequence": 4,
        "order_number": 804,
        "process_time": 461.53846153846155,
        "priority": 1,
        "dead_line": 20,
        "start_time": 749.87208269566611,
        "end_time": 1211.4105442341277,
        "tardiness_flag": false,
        "tardiness_duration": 1211.4105442341277
    },
    {
        "sequence": 6,
        "original_sequence": 3,
        "order_number": 803,
        "process_time": 238.41059602649008,
        "priority": 1,
        "dead_line": 2000,
        "start_time": 1211.4105442341277,
        "end_time": 1449.8211402606178,
        "tardiness_flag": true,
        "tardiness_duration": -550.17885973938223
    }
]

const colours = ['rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)'
]
const bgColourMap = {}

vfData.forEach((order, idx) => {
    bgColourMap[order['order_number']] = colours[idx]
})

const vfChartBeforeData = vfData.sort(
    (a, b) => {
        return a['original_sequence'] - b['original_sequence']
    })
    .map((data) => {
        return {
            data: [data['process_time']],
            label: data['order_number'],
            backgroundColor: bgColourMap[data['order_number']],
            borderColor: 'rgb(0,0,0)',
            borderWidth: 0.4
        }
    })

const vfChartAfterData = vfData.sort(
    (a, b) => {
        return a['sequence'] - b['sequence']
    })
    .map((data) => {
        return {
            data: [data['process_time']],
            label: data['order_number'],
            backgroundColor: bgColourMap[data['order_number']],
            borderColor: 'rgb(0,0,0)',
            borderWidth: 0.4
        }
    })

function getAnnotations() {
    // dynamically add annotations
    const deadLines = {}
    vfData.forEach((order, idx) => {
        deadLines[`line_${idx}`] =
        {
            type: 'line',
            label: {
                enabled: (ctx) => ctx.hovered,
                backgroundColor: 'rgb(0,0,0)',
                drawTime: 'afterDatasetsDraw',
                position: (ctx) => ctx.hoverPosition,
                content: (ctx) => [`Order ${order['order_number']} deadline:`, `${order['dead_line']}`]
            },
            yMin: -100,
            yMax: 100,
            xMin: order['dead_line'],
            xMax: order['dead_line'],
            borderColor: bgColourMap[order['order_number']],
            borderWidth: 5,
            display: true,
            enter(ctx, event) {
                ctx.hovered = true;
                ctx.hoverPosition = (event.x / ctx.chart.chartArea.width * 100) + '%';
                ctx.chart.update();
            },
            leave(ctx, event) {
                ctx.hovered = false;
                ctx.chart.update();
            }
        }

    })
    return deadLines;
}

const beforeChart = new Chart(beforeCtx, {
    type: 'bar',
    data: {
        labels: ['Before Optimisation'],
        datasets: vfChartBeforeData
    },
    options: {
        onClick: barClickHandler,
        plugins: {
            legend: { title: { display: true, text: "order number" } },
            annotation: {
                drawTime: 'beforeDatasetsDraw',
                annotations: getAnnotations
            }
        },
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
                beginAtZero: true
            },
            y: {
                stacked: true,
                beginAtZero: true,
            }
        }
    }
});

const afterChart = new Chart(afterCtx, {
    type: 'bar',
    data: {
        labels: ['After Optimisation'],
        datasets: vfChartAfterData
    },
    options: {
        onClick: barClickHandler,
        plugins: {
            tooltip: {
                callbacks: {
                    beforeLabel: function (context) {
                        orderNumber = context.dataset.label;
                        orderObj = vfData.filter((order) => order.order_number == orderNumber)[0]
                        return `${orderObj['original_sequence']} => ${orderObj['sequence']}`
                    }
                }
            },
            legend: { display: false },
            annotation: {
                annotations: getAnnotations
            }
        },
        // },
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
                beginAtZero: true
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
});

function barClickHandler(event, elements) {
    let data;
    if (event.chart.canvas.id === 'afterChart') {
        data = vfChartAfterData[elements[0].datasetIndex];
    } else if (event.chart.canvas.id === 'beforeChart') {
        data = vfChartBeforeData[elements[0].datasetIndex];
    }
    const orderObj = vfData.filter((order) => order.order_number == data.label)[0]
    const orderDetailsCard = document.getElementById("detailInfo");
    orderDetailsCard.innerText = JSON.stringify(orderObj)

}