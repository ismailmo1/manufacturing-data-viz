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
        "dead_line": 0,
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
        "dead_line": 0,
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
const colourMap = {}

vfData.forEach((order, idx) => {
    colourMap[order['order_number']] = colours[idx]
})

const vfChartBeforeData = vfData.sort(
    (a, b) => {
        return a['original_sequence'] - b['original_sequence']
    })
    .map((data) => {
        return {
            data: [data['process_time']],
            label: data['order_number'],
            backgroundColor: colourMap[data['order_number']],
            borderColor: vfData.map(() => 'rgb(0,0,0)'),
            borderWidth: 0.4
        }
    })

const vfChartAfterData = vfData.sort(
    (a, b) => {
        return a['sequence'] - b['sequence']
    })
    .map((data, idx) => {
        return {
            data: [data['process_time']],
            label: data['order_number'],
            backgroundColor: colourMap[data['order_number']],
            borderColor: vfData.map(() => 'rgb(0,0,0)'),
            borderWidth: 0.4
        }
    })


const beforeChart = new Chart(beforeCtx, {
    type: 'bar',
    data: {
        labels: ['Before Optimisation'],
        datasets: vfChartBeforeData
    },
    options: {
        plugins: {
            legend: { title: { display: true, text: "order number" } }
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
            legend: { display: false }
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