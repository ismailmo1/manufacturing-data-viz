"use strict";
(self["webpackChunkmanufacturing_data_viz"] = self["webpackChunkmanufacturing_data_viz"] || []).push([["scheduling"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/scheduling/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/scheduling/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:Arial, Helvetica, sans-serif; \n    max-width: 1080px; \n    padding-top: 20px;\n    margin: 0 auto !important; \n\tfloat: none !important; \n}\n\nh1, h2, #detailInfo{\n    display:flex; \n    justify-content:center; \n    padding:10px\n}", "",{"version":3,"sources":["webpack://./src/scheduling/style.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;IACxC,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;CAC5B,sBAAsB;AACvB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB;AACJ","sourcesContent":["body{\n    font-family:Arial, Helvetica, sans-serif; \n    max-width: 1080px; \n    padding-top: 20px;\n    margin: 0 auto !important; \n\tfloat: none !important; \n}\n\nh1, h2, #detailInfo{\n    display:flex; \n    justify-content:center; \n    padding:10px\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/scheduling/style.css":
/*!**********************************!*\
  !*** ./src/scheduling/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/scheduling/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/scheduling/script.js":
/*!**********************************!*\
  !*** ./src/scheduling/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/scheduling/style.css");




chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"].register(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__["default"]);

const beforeCtx = document.getElementById("beforeChart");
const afterCtx = document.getElementById("afterChart");
const comparisonCtx = document.getElementById("comparisonChart");

const vfData = [
  {
    sequence: 1,
    original_sequence: 5,
    order_number: 805,
    process_time: 122.03389830508475,
    priority: 3,
    dead_line: 0,
    start_time: 0,
    end_time: 122.03389830508475,
    tardiness_flag: false,
    tardiness_duration: 122.03389830508475,
  },
  {
    sequence: 2,
    original_sequence: 6,
    order_number: 806,
    process_time: 238.41059602649008,
    priority: 1,
    dead_line: 10,
    start_time: 122.03389830508475,
    end_time: 360.44449433157484,
    tardiness_flag: false,
    tardiness_duration: 360.44449433157484,
  },
  {
    sequence: 3,
    original_sequence: 1,
    order_number: 801,
    process_time: 258.99280575539569,
    priority: 1,
    dead_line: 600,
    start_time: 360.44449433157484,
    end_time: 619.43730008697048,
    tardiness_flag: false,
    tardiness_duration: 19.437300086970481,
  },
  {
    sequence: 4,
    original_sequence: 2,
    order_number: 802,
    process_time: 130.43478260869566,
    priority: 2,
    dead_line: 700,
    start_time: 619.43730008697048,
    end_time: 749.87208269566611,
    tardiness_flag: false,
    tardiness_duration: 49.872082695666109,
  },
  {
    sequence: 5,
    original_sequence: 4,
    order_number: 804,
    process_time: 461.53846153846155,
    priority: 1,
    dead_line: 20,
    start_time: 749.87208269566611,
    end_time: 1211.4105442341277,
    tardiness_flag: false,
    tardiness_duration: 1211.4105442341277,
  },
  {
    sequence: 6,
    original_sequence: 3,
    order_number: 803,
    process_time: 238.41059602649008,
    priority: 1,
    dead_line: 2000,
    start_time: 1211.4105442341277,
    end_time: 1449.8211402606178,
    tardiness_flag: true,
    tardiness_duration: -550.17885973938223,
  },
];

const colours = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];
const bgColourMap = {};

vfData.forEach((order, idx) => {
  bgColourMap[order["order_number"]] = colours[idx];
});

const vfChartBeforeData = vfData
  .sort((a, b) => {
    return a["original_sequence"] - b["original_sequence"];
  })
  .map((data) => {
    return {
      data: [data["process_time"]],
      label: data["order_number"],
      backgroundColor: bgColourMap[data["order_number"]],
      borderColor: "rgb(0,0,0)",
      borderWidth: 0.4,
    };
  });

const vfChartAfterData = vfData
  .sort((a, b) => {
    return a["sequence"] - b["sequence"];
  })
  .map((data) => {
    return {
      data: [data["process_time"]],
      label: data["order_number"],
      backgroundColor: bgColourMap[data["order_number"]],
      borderColor: "rgb(0,0,0)",
      borderWidth: 0.4,
    };
  });

function getDeadlineAnnotations() {
  // dynamically add annotations
  const deadLines = {};
  vfData.forEach((order, idx) => {
    deadLines[order["order_number"]] = {
      type: "line",
      label: {
        enabled: (ctx) => ctx.hovered,
        backgroundColor: "rgb(0,0,0)",
        drawTime: "afterDatasetsDraw",
        position: (ctx) => ctx.hoverPosition,
        content: (ctx) => [
          `Order ${order["order_number"]} deadline:`,
          `${order["dead_line"]}`,
        ],
      },
      yMin: -100,
      yMax: 100,
      xMin: order["dead_line"],
      xMax: order["dead_line"],
      borderColor: bgColourMap[order["order_number"]],
      borderWidth: 5,
      display: true,
      enter(ctx, event) {
        ctx.hovered = true;
        ctx.hoverPosition = (event.x / ctx.chart.chartArea.width) * 100 + "%";
        ctx.chart.update();
      },
      leave(ctx, event) {
        ctx.hovered = false;
        ctx.chart.update();
      },
    };
  });
  return deadLines;
}

function getLatenessAnnotation(chart, orderData) {
  const orderNumber = orderData["order_number"];
  let endTime = orderData["end_time"];
  let isLate = !orderData["tardiness_flag"];
  let latenessDuration = orderData["tardiness_duration"];

  if (chart.canvas.id === "beforeChart") {
    // calculate end time for before optimisation
    const chartData = chart.data.datasets;
    const orderObj = chartData.find((data) => data.label === orderNumber);
    const orderIdx = chartData.indexOf(orderObj);
    // dataset is ordered by sequence
    // grab all datasets except work orders after current
    const prevOrders = chartData.slice(0, orderIdx + 1);

    // sum up all values of remaining work orders
    endTime = prevOrders.reduce((prev, curr) => {
      return prev + curr.data[0];
    }, 0);

    // calculate lateness for before chart
    latenessDuration = endTime - orderData["dead_line"];
    isLate = latenessDuration > 0;
  }
  return {
    type: "line",
    label: {
      enabled: true,
      backgroundColor: "rgb(0,0,0)",
      drawTime: "afterDatasetsDraw",
      content: (ctx) =>
        isLate
          ? ["late by:", Math.round(latenessDuration)]
          : ["early by:", -Math.round(latenessDuration)],
    },
    arrowHeads: {
      start: {
        enabled: true,
        borderColor: "rgb(0,0,0)",
      },
      end: {
        enabled: true,
        borderColor: "rgb(0,0,0)",
      },
    },
    xMax: orderData["dead_line"],
    xMin: endTime,
    xScaleID: "x",
    yMax: 0,
    yMin: 0,
    yScaleID: "y",
    borderColor: "rgb(0,0,0)",
    borderWidth: 3,
    display: true,
  };
}

let unoptimisedOrderLateness = 0;
let currTime = 0;
vfChartBeforeData.forEach((order) => {
  const orderDeadline = vfData.find(
    (vfOrder) => vfOrder.order_number === order.label
  )["dead_line"];
  currTime += Number(order.data);
  const orderLateness = currTime - orderDeadline;
  if (orderLateness > 0) unoptimisedOrderLateness += orderLateness;
  // dont negate lateness for early orders
  console.log(unoptimisedOrderLateness);
});

function filterAnnotations(chart, orderNumber) {
  const otherOrderData = chart.data.datasets.filter(
    (data) => data.label !== orderNumber
  );
  const otherOrderNumbers = otherOrderData.map((data) => data.label);
  const annotations = getDeadlineAnnotations();
  // check first annotation
  const isFiltered =
    chart.options.plugins.annotation.annotations[otherOrderNumbers[0]]
      .borderColor === "rgba(255,255,255,0)";
  if (!isFiltered) {
    // make all other order annotations transparent
    otherOrderNumbers.forEach((orderNum) => {
      annotations[orderNum].borderColor = "rgba(255,255,255,0)";
    });

    const selectedOrderData = vfData.find(
      (order) => order.order_number == orderNumber
    );
    // add lateness annotations
    const latenessAnnotation = getLatenessAnnotation(chart, selectedOrderData);
    annotations["lateness"] = latenessAnnotation;
  }
  chart.options.plugins.annotation.annotations = annotations;

  chart.update();
}

function filterOrders(chart, orderNumber) {
  // removes borders
  // makes all other orders transparent
  const otherOrderData = chart.data.datasets.filter(
    (data) => data.label !== orderNumber
  );
  const selectedOrderData = chart.data.datasets.find(
    (data) => data.label === orderNumber
  );
  // check first data obj
  const isFiltered =
    otherOrderData[0].backgroundColor === "rgba(255,255,255,0)";
  if (isFiltered) {
    // add border back
    selectedOrderData.borderColor = "rgb(0,0,0)";
    // unhide other orders
    otherOrderData.forEach((order) => {
      order.backgroundColor = bgColourMap[order.label];
      order.borderColor = "rgb(0,0,0)";
    });
  } else {
    // remove border
    selectedOrderData.borderColor = "rgba(255,255,255,0)";
    // hide other orders
    otherOrderData.forEach((order) => {
      order.backgroundColor = "rgba(255,255,255,0)";
      order.borderColor = "rgba(255,255,255,0)";
    });
  }
  chart.update();
}

function legendClickHandler(e, legendItem, legend) {
  const selectedOrderNumber = legendItem.text;
  filterOrders(beforeChart, selectedOrderNumber);
  filterOrders(afterChart, selectedOrderNumber);
  filterAnnotations(beforeChart, selectedOrderNumber);
  filterAnnotations(afterChart, selectedOrderNumber);
}

const beforeChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](beforeCtx, {
  type: "bar",
  data: {
    labels: ["Before Optimisation"],
    datasets: vfChartBeforeData,
  },
  options: {
    onClick: barClickHandler,

    plugins: {
      legend: {
        title: {
          display: true,
          text: "order number",
        },
        onClick: legendClickHandler,
      },
      annotation: {
        drawTime: "beforeDatasetsDraw",
        annotations: getDeadlineAnnotations,
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        afterFit: function (scaleInstance) {
          scaleInstance.width = 120; // sets the width to 100px
        },
      },
    },
  },
});

const afterChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](afterCtx, {
  type: "bar",
  data: {
    labels: ["After Optimisation"],
    datasets: vfChartAfterData,
  },
  options: {
    onClick: barClickHandler,
    plugins: {
      tooltip: {
        callbacks: {
          beforeLabel: function (context) {
            const orderNumber = context.dataset.label;
            console.log(orderNumber);
            const orderObj = vfData.find(
              (order) => order.order_number == orderNumber
            );
            return `${orderObj["original_sequence"]} => ${orderObj["sequence"]}`;
          },
        },
      },
      legend: { display: false },
      annotation: {
        annotations: getDeadlineAnnotations,
      },
    },
    // },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        afterFit: function (scaleInstance) {
          scaleInstance.width = 120; // sets the width to 100px
        },
      },
    },
  },
});

function barClickHandler(event, elements) {
  let data;
  if (event.chart.canvas.id === "afterChart") {
    data = vfChartAfterData[elements[0].datasetIndex];
  } else if (event.chart.canvas.id === "beforeChart") {
    data = vfChartBeforeData[elements[0].datasetIndex];
  }
  filterOrders(beforeChart, data.label);
  filterOrders(afterChart, data.label);
  filterAnnotations(beforeChart, data.label);
  filterAnnotations(afterChart, data.label);
  const orderObj = vfData.filter(
    (order) => order.order_number == data.label
  )[0];
  const orderDetailsCard = document.getElementById("detailInfo");
  orderDetailsCard.innerText = JSON.stringify(orderObj);
}

const comparisonChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](comparisonCtx, {
  type: "bar",
  labels: ["average", "sum"],
  data: {
    labels: ["Average Lateness", "Total Lateness"],
    datasets: [
      {
        label: "Unoptimised",
        data: [
          unoptimisedOrderLateness / vfData.length,
          unoptimisedOrderLateness,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 0.4,
      },
      {
        label: "Optimised",
        data: [sumLateness(vfData) / vfData.length, sumLateness(vfData)],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 0.4,
      },
    ],
  },
  options: {
    // },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        afterFit: function (scaleInstance) {
          scaleInstance.width = 120; // sets the width to 100px
        },
      },
    },
  },
});

function sumLateness(vfData) {
  // dont negate lateness for early orders
  return vfData.reduce((prev, curr) => {
    if (!curr["tardiness_flag"]) {
      return prev + curr["tardiness_duration"];
    }
    return prev;
  }, 0);
}

// TODO: add cleaning schedule optimisation


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_auto_auto_esm_js-node_modules_chartjs-plugin-annotation_dist_ch-e852d4"], () => (__webpack_exec__("./src/scheduling/script.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvc2NoZWR1bGluZy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsK0NBQStDLGdEQUFnRCx5QkFBeUIsd0JBQXdCLGlDQUFpQyw0QkFBNEIsR0FBRyx3QkFBd0Isb0JBQW9CLDhCQUE4QixxQkFBcUIsT0FBTywyRkFBMkYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSw4QkFBOEIsZ0RBQWdELHlCQUF5Qix3QkFBd0IsaUNBQWlDLDRCQUE0QixHQUFHLHdCQUF3QixvQkFBb0IsOEJBQThCLHFCQUFxQixtQkFBbUI7QUFDMXlCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnZDLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQjNDO0FBQ3VCO0FBQ3BDOztBQUVyQiw4REFBYyxDQUFDLGlFQUFnQjs7QUFFL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUJBQXVCO0FBQzFDLGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxREFBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVELHVCQUF1QixxREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLCtCQUErQixLQUFLLHFCQUFxQjtBQUMvRSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIscURBQUs7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2NoZWR1bGluZy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy9zY2hlZHVsaW5nL3N0eWxlLmNzcz8xOTJlIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2NoZWR1bGluZy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7IFxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgXFxuXFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxufVxcblxcbmgxLCBoMiwgI2RldGFpbEluZm97XFxuICAgIGRpc3BsYXk6ZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxcbiAgICBwYWRkaW5nOjEwcHhcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NjaGVkdWxpbmcvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0NBQzVCLHNCQUFzQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7IFxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgXFxuXFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxufVxcblxcbmgxLCBoMiwgI2RldGFpbEluZm97XFxuICAgIGRpc3BsYXk6ZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxcbiAgICBwYWRkaW5nOjEwcHhcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xuaW1wb3J0IGFubm90YXRpb25QbHVnaW4gZnJvbSBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbkNoYXJ0LnJlZ2lzdGVyKGFubm90YXRpb25QbHVnaW4pO1xuXG5jb25zdCBiZWZvcmVDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlZm9yZUNoYXJ0XCIpO1xuY29uc3QgYWZ0ZXJDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyQ2hhcnRcIik7XG5jb25zdCBjb21wYXJpc29uQ3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21wYXJpc29uQ2hhcnRcIik7XG5cbmNvbnN0IHZmRGF0YSA9IFtcbiAge1xuICAgIHNlcXVlbmNlOiAxLFxuICAgIG9yaWdpbmFsX3NlcXVlbmNlOiA1LFxuICAgIG9yZGVyX251bWJlcjogODA1LFxuICAgIHByb2Nlc3NfdGltZTogMTIyLjAzMzg5ODMwNTA4NDc1LFxuICAgIHByaW9yaXR5OiAzLFxuICAgIGRlYWRfbGluZTogMCxcbiAgICBzdGFydF90aW1lOiAwLFxuICAgIGVuZF90aW1lOiAxMjIuMDMzODk4MzA1MDg0NzUsXG4gICAgdGFyZGluZXNzX2ZsYWc6IGZhbHNlLFxuICAgIHRhcmRpbmVzc19kdXJhdGlvbjogMTIyLjAzMzg5ODMwNTA4NDc1LFxuICB9LFxuICB7XG4gICAgc2VxdWVuY2U6IDIsXG4gICAgb3JpZ2luYWxfc2VxdWVuY2U6IDYsXG4gICAgb3JkZXJfbnVtYmVyOiA4MDYsXG4gICAgcHJvY2Vzc190aW1lOiAyMzguNDEwNTk2MDI2NDkwMDgsXG4gICAgcHJpb3JpdHk6IDEsXG4gICAgZGVhZF9saW5lOiAxMCxcbiAgICBzdGFydF90aW1lOiAxMjIuMDMzODk4MzA1MDg0NzUsXG4gICAgZW5kX3RpbWU6IDM2MC40NDQ0OTQzMzE1NzQ4NCxcbiAgICB0YXJkaW5lc3NfZmxhZzogZmFsc2UsXG4gICAgdGFyZGluZXNzX2R1cmF0aW9uOiAzNjAuNDQ0NDk0MzMxNTc0ODQsXG4gIH0sXG4gIHtcbiAgICBzZXF1ZW5jZTogMyxcbiAgICBvcmlnaW5hbF9zZXF1ZW5jZTogMSxcbiAgICBvcmRlcl9udW1iZXI6IDgwMSxcbiAgICBwcm9jZXNzX3RpbWU6IDI1OC45OTI4MDU3NTUzOTU2OSxcbiAgICBwcmlvcml0eTogMSxcbiAgICBkZWFkX2xpbmU6IDYwMCxcbiAgICBzdGFydF90aW1lOiAzNjAuNDQ0NDk0MzMxNTc0ODQsXG4gICAgZW5kX3RpbWU6IDYxOS40MzczMDAwODY5NzA0OCxcbiAgICB0YXJkaW5lc3NfZmxhZzogZmFsc2UsXG4gICAgdGFyZGluZXNzX2R1cmF0aW9uOiAxOS40MzczMDAwODY5NzA0ODEsXG4gIH0sXG4gIHtcbiAgICBzZXF1ZW5jZTogNCxcbiAgICBvcmlnaW5hbF9zZXF1ZW5jZTogMixcbiAgICBvcmRlcl9udW1iZXI6IDgwMixcbiAgICBwcm9jZXNzX3RpbWU6IDEzMC40MzQ3ODI2MDg2OTU2NixcbiAgICBwcmlvcml0eTogMixcbiAgICBkZWFkX2xpbmU6IDcwMCxcbiAgICBzdGFydF90aW1lOiA2MTkuNDM3MzAwMDg2OTcwNDgsXG4gICAgZW5kX3RpbWU6IDc0OS44NzIwODI2OTU2NjYxMSxcbiAgICB0YXJkaW5lc3NfZmxhZzogZmFsc2UsXG4gICAgdGFyZGluZXNzX2R1cmF0aW9uOiA0OS44NzIwODI2OTU2NjYxMDksXG4gIH0sXG4gIHtcbiAgICBzZXF1ZW5jZTogNSxcbiAgICBvcmlnaW5hbF9zZXF1ZW5jZTogNCxcbiAgICBvcmRlcl9udW1iZXI6IDgwNCxcbiAgICBwcm9jZXNzX3RpbWU6IDQ2MS41Mzg0NjE1Mzg0NjE1NSxcbiAgICBwcmlvcml0eTogMSxcbiAgICBkZWFkX2xpbmU6IDIwLFxuICAgIHN0YXJ0X3RpbWU6IDc0OS44NzIwODI2OTU2NjYxMSxcbiAgICBlbmRfdGltZTogMTIxMS40MTA1NDQyMzQxMjc3LFxuICAgIHRhcmRpbmVzc19mbGFnOiBmYWxzZSxcbiAgICB0YXJkaW5lc3NfZHVyYXRpb246IDEyMTEuNDEwNTQ0MjM0MTI3NyxcbiAgfSxcbiAge1xuICAgIHNlcXVlbmNlOiA2LFxuICAgIG9yaWdpbmFsX3NlcXVlbmNlOiAzLFxuICAgIG9yZGVyX251bWJlcjogODAzLFxuICAgIHByb2Nlc3NfdGltZTogMjM4LjQxMDU5NjAyNjQ5MDA4LFxuICAgIHByaW9yaXR5OiAxLFxuICAgIGRlYWRfbGluZTogMjAwMCxcbiAgICBzdGFydF90aW1lOiAxMjExLjQxMDU0NDIzNDEyNzcsXG4gICAgZW5kX3RpbWU6IDE0NDkuODIxMTQwMjYwNjE3OCxcbiAgICB0YXJkaW5lc3NfZmxhZzogdHJ1ZSxcbiAgICB0YXJkaW5lc3NfZHVyYXRpb246IC01NTAuMTc4ODU5NzM5MzgyMjMsXG4gIH0sXG5dO1xuXG5jb25zdCBjb2xvdXJzID0gW1xuICBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gIFwicmdiYSgyNTUsIDE1OSwgNjQsIDAuMilcIixcbiAgXCJyZ2JhKDI1NSwgMjA1LCA4NiwgMC4yKVwiLFxuICBcInJnYmEoNzUsIDE5MiwgMTkyLCAwLjIpXCIsXG4gIFwicmdiYSg1NCwgMTYyLCAyMzUsIDAuMilcIixcbiAgXCJyZ2JhKDE1MywgMTAyLCAyNTUsIDAuMilcIixcbiAgXCJyZ2JhKDIwMSwgMjAzLCAyMDcsIDAuMilcIixcbl07XG5jb25zdCBiZ0NvbG91ck1hcCA9IHt9O1xuXG52ZkRhdGEuZm9yRWFjaCgob3JkZXIsIGlkeCkgPT4ge1xuICBiZ0NvbG91ck1hcFtvcmRlcltcIm9yZGVyX251bWJlclwiXV0gPSBjb2xvdXJzW2lkeF07XG59KTtcblxuY29uc3QgdmZDaGFydEJlZm9yZURhdGEgPSB2ZkRhdGFcbiAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVtcIm9yaWdpbmFsX3NlcXVlbmNlXCJdIC0gYltcIm9yaWdpbmFsX3NlcXVlbmNlXCJdO1xuICB9KVxuICAubWFwKChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtkYXRhW1wicHJvY2Vzc190aW1lXCJdXSxcbiAgICAgIGxhYmVsOiBkYXRhW1wib3JkZXJfbnVtYmVyXCJdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG91ck1hcFtkYXRhW1wib3JkZXJfbnVtYmVyXCJdXSxcbiAgICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgIGJvcmRlcldpZHRoOiAwLjQsXG4gICAgfTtcbiAgfSk7XG5cbmNvbnN0IHZmQ2hhcnRBZnRlckRhdGEgPSB2ZkRhdGFcbiAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVtcInNlcXVlbmNlXCJdIC0gYltcInNlcXVlbmNlXCJdO1xuICB9KVxuICAubWFwKChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtkYXRhW1wicHJvY2Vzc190aW1lXCJdXSxcbiAgICAgIGxhYmVsOiBkYXRhW1wib3JkZXJfbnVtYmVyXCJdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG91ck1hcFtkYXRhW1wib3JkZXJfbnVtYmVyXCJdXSxcbiAgICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgIGJvcmRlcldpZHRoOiAwLjQsXG4gICAgfTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGdldERlYWRsaW5lQW5ub3RhdGlvbnMoKSB7XG4gIC8vIGR5bmFtaWNhbGx5IGFkZCBhbm5vdGF0aW9uc1xuICBjb25zdCBkZWFkTGluZXMgPSB7fTtcbiAgdmZEYXRhLmZvckVhY2goKG9yZGVyLCBpZHgpID0+IHtcbiAgICBkZWFkTGluZXNbb3JkZXJbXCJvcmRlcl9udW1iZXJcIl1dID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBlbmFibGVkOiAoY3R4KSA9PiBjdHguaG92ZXJlZCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIixcbiAgICAgICAgcG9zaXRpb246IChjdHgpID0+IGN0eC5ob3ZlclBvc2l0aW9uLFxuICAgICAgICBjb250ZW50OiAoY3R4KSA9PiBbXG4gICAgICAgICAgYE9yZGVyICR7b3JkZXJbXCJvcmRlcl9udW1iZXJcIl19IGRlYWRsaW5lOmAsXG4gICAgICAgICAgYCR7b3JkZXJbXCJkZWFkX2xpbmVcIl19YCxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB5TWluOiAtMTAwLFxuICAgICAgeU1heDogMTAwLFxuICAgICAgeE1pbjogb3JkZXJbXCJkZWFkX2xpbmVcIl0sXG4gICAgICB4TWF4OiBvcmRlcltcImRlYWRfbGluZVwiXSxcbiAgICAgIGJvcmRlckNvbG9yOiBiZ0NvbG91ck1hcFtvcmRlcltcIm9yZGVyX251bWJlclwiXV0sXG4gICAgICBib3JkZXJXaWR0aDogNSxcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBlbnRlcihjdHgsIGV2ZW50KSB7XG4gICAgICAgIGN0eC5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgY3R4LmhvdmVyUG9zaXRpb24gPSAoZXZlbnQueCAvIGN0eC5jaGFydC5jaGFydEFyZWEud2lkdGgpICogMTAwICsgXCIlXCI7XG4gICAgICAgIGN0eC5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICBsZWF2ZShjdHgsIGV2ZW50KSB7XG4gICAgICAgIGN0eC5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgIGN0eC5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBkZWFkTGluZXM7XG59XG5cbmZ1bmN0aW9uIGdldExhdGVuZXNzQW5ub3RhdGlvbihjaGFydCwgb3JkZXJEYXRhKSB7XG4gIGNvbnN0IG9yZGVyTnVtYmVyID0gb3JkZXJEYXRhW1wib3JkZXJfbnVtYmVyXCJdO1xuICBsZXQgZW5kVGltZSA9IG9yZGVyRGF0YVtcImVuZF90aW1lXCJdO1xuICBsZXQgaXNMYXRlID0gIW9yZGVyRGF0YVtcInRhcmRpbmVzc19mbGFnXCJdO1xuICBsZXQgbGF0ZW5lc3NEdXJhdGlvbiA9IG9yZGVyRGF0YVtcInRhcmRpbmVzc19kdXJhdGlvblwiXTtcblxuICBpZiAoY2hhcnQuY2FudmFzLmlkID09PSBcImJlZm9yZUNoYXJ0XCIpIHtcbiAgICAvLyBjYWxjdWxhdGUgZW5kIHRpbWUgZm9yIGJlZm9yZSBvcHRpbWlzYXRpb25cbiAgICBjb25zdCBjaGFydERhdGEgPSBjaGFydC5kYXRhLmRhdGFzZXRzO1xuICAgIGNvbnN0IG9yZGVyT2JqID0gY2hhcnREYXRhLmZpbmQoKGRhdGEpID0+IGRhdGEubGFiZWwgPT09IG9yZGVyTnVtYmVyKTtcbiAgICBjb25zdCBvcmRlcklkeCA9IGNoYXJ0RGF0YS5pbmRleE9mKG9yZGVyT2JqKTtcbiAgICAvLyBkYXRhc2V0IGlzIG9yZGVyZWQgYnkgc2VxdWVuY2VcbiAgICAvLyBncmFiIGFsbCBkYXRhc2V0cyBleGNlcHQgd29yayBvcmRlcnMgYWZ0ZXIgY3VycmVudFxuICAgIGNvbnN0IHByZXZPcmRlcnMgPSBjaGFydERhdGEuc2xpY2UoMCwgb3JkZXJJZHggKyAxKTtcblxuICAgIC8vIHN1bSB1cCBhbGwgdmFsdWVzIG9mIHJlbWFpbmluZyB3b3JrIG9yZGVyc1xuICAgIGVuZFRpbWUgPSBwcmV2T3JkZXJzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgcmV0dXJuIHByZXYgKyBjdXJyLmRhdGFbMF07XG4gICAgfSwgMCk7XG5cbiAgICAvLyBjYWxjdWxhdGUgbGF0ZW5lc3MgZm9yIGJlZm9yZSBjaGFydFxuICAgIGxhdGVuZXNzRHVyYXRpb24gPSBlbmRUaW1lIC0gb3JkZXJEYXRhW1wiZGVhZF9saW5lXCJdO1xuICAgIGlzTGF0ZSA9IGxhdGVuZXNzRHVyYXRpb24gPiAwO1xuICB9XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJsaW5lXCIsXG4gICAgbGFiZWw6IHtcbiAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiKDAsMCwwKVwiLFxuICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIixcbiAgICAgIGNvbnRlbnQ6IChjdHgpID0+XG4gICAgICAgIGlzTGF0ZVxuICAgICAgICAgID8gW1wibGF0ZSBieTpcIiwgTWF0aC5yb3VuZChsYXRlbmVzc0R1cmF0aW9uKV1cbiAgICAgICAgICA6IFtcImVhcmx5IGJ5OlwiLCAtTWF0aC5yb3VuZChsYXRlbmVzc0R1cmF0aW9uKV0sXG4gICAgfSxcbiAgICBhcnJvd0hlYWRzOiB7XG4gICAgICBzdGFydDoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMCwwLDApXCIsXG4gICAgICB9LFxuICAgICAgZW5kOiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICB4TWF4OiBvcmRlckRhdGFbXCJkZWFkX2xpbmVcIl0sXG4gICAgeE1pbjogZW5kVGltZSxcbiAgICB4U2NhbGVJRDogXCJ4XCIsXG4gICAgeU1heDogMCxcbiAgICB5TWluOiAwLFxuICAgIHlTY2FsZUlEOiBcInlcIixcbiAgICBib3JkZXJDb2xvcjogXCJyZ2IoMCwwLDApXCIsXG4gICAgYm9yZGVyV2lkdGg6IDMsXG4gICAgZGlzcGxheTogdHJ1ZSxcbiAgfTtcbn1cblxubGV0IHVub3B0aW1pc2VkT3JkZXJMYXRlbmVzcyA9IDA7XG5sZXQgY3VyclRpbWUgPSAwO1xudmZDaGFydEJlZm9yZURhdGEuZm9yRWFjaCgob3JkZXIpID0+IHtcbiAgY29uc3Qgb3JkZXJEZWFkbGluZSA9IHZmRGF0YS5maW5kKFxuICAgICh2Zk9yZGVyKSA9PiB2Zk9yZGVyLm9yZGVyX251bWJlciA9PT0gb3JkZXIubGFiZWxcbiAgKVtcImRlYWRfbGluZVwiXTtcbiAgY3VyclRpbWUgKz0gTnVtYmVyKG9yZGVyLmRhdGEpO1xuICBjb25zdCBvcmRlckxhdGVuZXNzID0gY3VyclRpbWUgLSBvcmRlckRlYWRsaW5lO1xuICBpZiAob3JkZXJMYXRlbmVzcyA+IDApIHVub3B0aW1pc2VkT3JkZXJMYXRlbmVzcyArPSBvcmRlckxhdGVuZXNzO1xuICAvLyBkb250IG5lZ2F0ZSBsYXRlbmVzcyBmb3IgZWFybHkgb3JkZXJzXG4gIGNvbnNvbGUubG9nKHVub3B0aW1pc2VkT3JkZXJMYXRlbmVzcyk7XG59KTtcblxuZnVuY3Rpb24gZmlsdGVyQW5ub3RhdGlvbnMoY2hhcnQsIG9yZGVyTnVtYmVyKSB7XG4gIGNvbnN0IG90aGVyT3JkZXJEYXRhID0gY2hhcnQuZGF0YS5kYXRhc2V0cy5maWx0ZXIoXG4gICAgKGRhdGEpID0+IGRhdGEubGFiZWwgIT09IG9yZGVyTnVtYmVyXG4gICk7XG4gIGNvbnN0IG90aGVyT3JkZXJOdW1iZXJzID0gb3RoZXJPcmRlckRhdGEubWFwKChkYXRhKSA9PiBkYXRhLmxhYmVsKTtcbiAgY29uc3QgYW5ub3RhdGlvbnMgPSBnZXREZWFkbGluZUFubm90YXRpb25zKCk7XG4gIC8vIGNoZWNrIGZpcnN0IGFubm90YXRpb25cbiAgY29uc3QgaXNGaWx0ZXJlZCA9XG4gICAgY2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbb3RoZXJPcmRlck51bWJlcnNbMF1dXG4gICAgICAuYm9yZGVyQ29sb3IgPT09IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICBpZiAoIWlzRmlsdGVyZWQpIHtcbiAgICAvLyBtYWtlIGFsbCBvdGhlciBvcmRlciBhbm5vdGF0aW9ucyB0cmFuc3BhcmVudFxuICAgIG90aGVyT3JkZXJOdW1iZXJzLmZvckVhY2goKG9yZGVyTnVtKSA9PiB7XG4gICAgICBhbm5vdGF0aW9uc1tvcmRlck51bV0uYm9yZGVyQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkT3JkZXJEYXRhID0gdmZEYXRhLmZpbmQoXG4gICAgICAob3JkZXIpID0+IG9yZGVyLm9yZGVyX251bWJlciA9PSBvcmRlck51bWJlclxuICAgICk7XG4gICAgLy8gYWRkIGxhdGVuZXNzIGFubm90YXRpb25zXG4gICAgY29uc3QgbGF0ZW5lc3NBbm5vdGF0aW9uID0gZ2V0TGF0ZW5lc3NBbm5vdGF0aW9uKGNoYXJ0LCBzZWxlY3RlZE9yZGVyRGF0YSk7XG4gICAgYW5ub3RhdGlvbnNbXCJsYXRlbmVzc1wiXSA9IGxhdGVuZXNzQW5ub3RhdGlvbjtcbiAgfVxuICBjaGFydC5vcHRpb25zLnBsdWdpbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXG4gIGNoYXJ0LnVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJPcmRlcnMoY2hhcnQsIG9yZGVyTnVtYmVyKSB7XG4gIC8vIHJlbW92ZXMgYm9yZGVyc1xuICAvLyBtYWtlcyBhbGwgb3RoZXIgb3JkZXJzIHRyYW5zcGFyZW50XG4gIGNvbnN0IG90aGVyT3JkZXJEYXRhID0gY2hhcnQuZGF0YS5kYXRhc2V0cy5maWx0ZXIoXG4gICAgKGRhdGEpID0+IGRhdGEubGFiZWwgIT09IG9yZGVyTnVtYmVyXG4gICk7XG4gIGNvbnN0IHNlbGVjdGVkT3JkZXJEYXRhID0gY2hhcnQuZGF0YS5kYXRhc2V0cy5maW5kKFxuICAgIChkYXRhKSA9PiBkYXRhLmxhYmVsID09PSBvcmRlck51bWJlclxuICApO1xuICAvLyBjaGVjayBmaXJzdCBkYXRhIG9ialxuICBjb25zdCBpc0ZpbHRlcmVkID1cbiAgICBvdGhlck9yZGVyRGF0YVswXS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICBpZiAoaXNGaWx0ZXJlZCkge1xuICAgIC8vIGFkZCBib3JkZXIgYmFja1xuICAgIHNlbGVjdGVkT3JkZXJEYXRhLmJvcmRlckNvbG9yID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgLy8gdW5oaWRlIG90aGVyIG9yZGVyc1xuICAgIG90aGVyT3JkZXJEYXRhLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgICBvcmRlci5iYWNrZ3JvdW5kQ29sb3IgPSBiZ0NvbG91ck1hcFtvcmRlci5sYWJlbF07XG4gICAgICBvcmRlci5ib3JkZXJDb2xvciA9IFwicmdiKDAsMCwwKVwiO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlbW92ZSBib3JkZXJcbiAgICBzZWxlY3RlZE9yZGVyRGF0YS5ib3JkZXJDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICAgIC8vIGhpZGUgb3RoZXIgb3JkZXJzXG4gICAgb3RoZXJPcmRlckRhdGEuZm9yRWFjaCgob3JkZXIpID0+IHtcbiAgICAgIG9yZGVyLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICAgICAgb3JkZXIuYm9yZGVyQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIjtcbiAgICB9KTtcbiAgfVxuICBjaGFydC51cGRhdGUoKTtcbn1cblxuZnVuY3Rpb24gbGVnZW5kQ2xpY2tIYW5kbGVyKGUsIGxlZ2VuZEl0ZW0sIGxlZ2VuZCkge1xuICBjb25zdCBzZWxlY3RlZE9yZGVyTnVtYmVyID0gbGVnZW5kSXRlbS50ZXh0O1xuICBmaWx0ZXJPcmRlcnMoYmVmb3JlQ2hhcnQsIHNlbGVjdGVkT3JkZXJOdW1iZXIpO1xuICBmaWx0ZXJPcmRlcnMoYWZ0ZXJDaGFydCwgc2VsZWN0ZWRPcmRlck51bWJlcik7XG4gIGZpbHRlckFubm90YXRpb25zKGJlZm9yZUNoYXJ0LCBzZWxlY3RlZE9yZGVyTnVtYmVyKTtcbiAgZmlsdGVyQW5ub3RhdGlvbnMoYWZ0ZXJDaGFydCwgc2VsZWN0ZWRPcmRlck51bWJlcik7XG59XG5cbmNvbnN0IGJlZm9yZUNoYXJ0ID0gbmV3IENoYXJ0KGJlZm9yZUN0eCwge1xuICB0eXBlOiBcImJhclwiLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbXCJCZWZvcmUgT3B0aW1pc2F0aW9uXCJdLFxuICAgIGRhdGFzZXRzOiB2ZkNoYXJ0QmVmb3JlRGF0YSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIG9uQ2xpY2s6IGJhckNsaWNrSGFuZGxlcixcblxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdGV4dDogXCJvcmRlciBudW1iZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljazogbGVnZW5kQ2xpY2tIYW5kbGVyLFxuICAgICAgfSxcbiAgICAgIGFubm90YXRpb246IHtcbiAgICAgICAgZHJhd1RpbWU6IFwiYmVmb3JlRGF0YXNldHNEcmF3XCIsXG4gICAgICAgIGFubm90YXRpb25zOiBnZXREZWFkbGluZUFubm90YXRpb25zLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGluZGV4QXhpczogXCJ5XCIsXG4gICAgc2NhbGVzOiB7XG4gICAgICB4OiB7XG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgIGFmdGVyRml0OiBmdW5jdGlvbiAoc2NhbGVJbnN0YW5jZSkge1xuICAgICAgICAgIHNjYWxlSW5zdGFuY2Uud2lkdGggPSAxMjA7IC8vIHNldHMgdGhlIHdpZHRoIHRvIDEwMHB4XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgYWZ0ZXJDaGFydCA9IG5ldyBDaGFydChhZnRlckN0eCwge1xuICB0eXBlOiBcImJhclwiLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbXCJBZnRlciBPcHRpbWlzYXRpb25cIl0sXG4gICAgZGF0YXNldHM6IHZmQ2hhcnRBZnRlckRhdGEsXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBvbkNsaWNrOiBiYXJDbGlja0hhbmRsZXIsXG4gICAgcGx1Z2luczoge1xuICAgICAgdG9vbHRpcDoge1xuICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICBiZWZvcmVMYWJlbDogZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IG9yZGVyTnVtYmVyID0gY29udGV4dC5kYXRhc2V0LmxhYmVsO1xuICAgICAgICAgICAgY29uc29sZS5sb2cob3JkZXJOdW1iZXIpO1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJPYmogPSB2ZkRhdGEuZmluZChcbiAgICAgICAgICAgICAgKG9yZGVyKSA9PiBvcmRlci5vcmRlcl9udW1iZXIgPT0gb3JkZXJOdW1iZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm4gYCR7b3JkZXJPYmpbXCJvcmlnaW5hbF9zZXF1ZW5jZVwiXX0gPT4gJHtvcmRlck9ialtcInNlcXVlbmNlXCJdfWA7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSxcbiAgICAgIGFubm90YXRpb246IHtcbiAgICAgICAgYW5ub3RhdGlvbnM6IGdldERlYWRsaW5lQW5ub3RhdGlvbnMsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gfSxcbiAgICBpbmRleEF4aXM6IFwieVwiLFxuICAgIHNjYWxlczoge1xuICAgICAgeDoge1xuICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICBhZnRlckZpdDogZnVuY3Rpb24gKHNjYWxlSW5zdGFuY2UpIHtcbiAgICAgICAgICBzY2FsZUluc3RhbmNlLndpZHRoID0gMTIwOyAvLyBzZXRzIHRoZSB3aWR0aCB0byAxMDBweFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIGJhckNsaWNrSGFuZGxlcihldmVudCwgZWxlbWVudHMpIHtcbiAgbGV0IGRhdGE7XG4gIGlmIChldmVudC5jaGFydC5jYW52YXMuaWQgPT09IFwiYWZ0ZXJDaGFydFwiKSB7XG4gICAgZGF0YSA9IHZmQ2hhcnRBZnRlckRhdGFbZWxlbWVudHNbMF0uZGF0YXNldEluZGV4XTtcbiAgfSBlbHNlIGlmIChldmVudC5jaGFydC5jYW52YXMuaWQgPT09IFwiYmVmb3JlQ2hhcnRcIikge1xuICAgIGRhdGEgPSB2ZkNoYXJ0QmVmb3JlRGF0YVtlbGVtZW50c1swXS5kYXRhc2V0SW5kZXhdO1xuICB9XG4gIGZpbHRlck9yZGVycyhiZWZvcmVDaGFydCwgZGF0YS5sYWJlbCk7XG4gIGZpbHRlck9yZGVycyhhZnRlckNoYXJ0LCBkYXRhLmxhYmVsKTtcbiAgZmlsdGVyQW5ub3RhdGlvbnMoYmVmb3JlQ2hhcnQsIGRhdGEubGFiZWwpO1xuICBmaWx0ZXJBbm5vdGF0aW9ucyhhZnRlckNoYXJ0LCBkYXRhLmxhYmVsKTtcbiAgY29uc3Qgb3JkZXJPYmogPSB2ZkRhdGEuZmlsdGVyKFxuICAgIChvcmRlcikgPT4gb3JkZXIub3JkZXJfbnVtYmVyID09IGRhdGEubGFiZWxcbiAgKVswXTtcbiAgY29uc3Qgb3JkZXJEZXRhaWxzQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsSW5mb1wiKTtcbiAgb3JkZXJEZXRhaWxzQ2FyZC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShvcmRlck9iaik7XG59XG5cbmNvbnN0IGNvbXBhcmlzb25DaGFydCA9IG5ldyBDaGFydChjb21wYXJpc29uQ3R4LCB7XG4gIHR5cGU6IFwiYmFyXCIsXG4gIGxhYmVsczogW1wiYXZlcmFnZVwiLCBcInN1bVwiXSxcbiAgZGF0YToge1xuICAgIGxhYmVsczogW1wiQXZlcmFnZSBMYXRlbmVzc1wiLCBcIlRvdGFsIExhdGVuZXNzXCJdLFxuICAgIGRhdGFzZXRzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIlVub3B0aW1pc2VkXCIsXG4gICAgICAgIGRhdGE6IFtcbiAgICAgICAgICB1bm9wdGltaXNlZE9yZGVyTGF0ZW5lc3MgLyB2ZkRhdGEubGVuZ3RoLFxuICAgICAgICAgIHVub3B0aW1pc2VkT3JkZXJMYXRlbmVzcyxcbiAgICAgICAgXSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjIpXCIsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgICAgYm9yZGVyV2lkdGg6IDAuNCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIk9wdGltaXNlZFwiLFxuICAgICAgICBkYXRhOiBbc3VtTGF0ZW5lc3ModmZEYXRhKSAvIHZmRGF0YS5sZW5ndGgsIHN1bUxhdGVuZXNzKHZmRGF0YSldLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDAsMCwwKVwiLFxuICAgICAgICBib3JkZXJXaWR0aDogMC40LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgLy8gfSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHg6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgYWZ0ZXJGaXQ6IGZ1bmN0aW9uIChzY2FsZUluc3RhbmNlKSB7XG4gICAgICAgICAgc2NhbGVJbnN0YW5jZS53aWR0aCA9IDEyMDsgLy8gc2V0cyB0aGUgd2lkdGggdG8gMTAwcHhcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBzdW1MYXRlbmVzcyh2ZkRhdGEpIHtcbiAgLy8gZG9udCBuZWdhdGUgbGF0ZW5lc3MgZm9yIGVhcmx5IG9yZGVyc1xuICByZXR1cm4gdmZEYXRhLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgIGlmICghY3VycltcInRhcmRpbmVzc19mbGFnXCJdKSB7XG4gICAgICByZXR1cm4gcHJldiArIGN1cnJbXCJ0YXJkaW5lc3NfZHVyYXRpb25cIl07XG4gICAgfVxuICAgIHJldHVybiBwcmV2O1xuICB9LCAwKTtcbn1cblxuLy8gVE9ETzogYWRkIGNsZWFuaW5nIHNjaGVkdWxlIG9wdGltaXNhdGlvblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9