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

/***/ "./src/scheduling/scripts/charts/chartData.js":
/*!****************************************************!*\
  !*** ./src/scheduling/scripts/charts/chartData.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "optimisedLatenessData": () => (/* binding */ optimisedLatenessData),
/* harmony export */   "unoptimisedLatenessData": () => (/* binding */ unoptimisedLatenessData),
/* harmony export */   "vfChartAfterData": () => (/* binding */ vfChartAfterData),
/* harmony export */   "vfChartBeforeData": () => (/* binding */ vfChartBeforeData)
/* harmony export */ });
/* harmony import */ var _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/optsched.json */ "./src/scheduling/scripts/data/optsched.json");
/* harmony import */ var _utils_colours__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colours */ "./src/scheduling/scripts/utils/colours.js");
/* harmony import */ var _utils_lateness__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/lateness */ "./src/scheduling/scripts/utils/lateness.js");




const vfChartBeforeData = _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__.sort((a, b) => {
    return a["original_sequence"] - b["original_sequence"];
  })
  .map((data) => {
    return {
      data: [data["process_time"]],
      label: data["order_number"],
      backgroundColor: _utils_colours__WEBPACK_IMPORTED_MODULE_1__.bgColourMap[data["order_number"]],
      borderColor: "rgb(0,0,0)",
      borderWidth: 0.4,
    };
  });

const vfChartAfterData = _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__.sort((a, b) => {
    return a["sequence"] - b["sequence"];
  })
  .map((data) => {
    return {
      data: [data["process_time"]],
      label: data["order_number"],
      backgroundColor: _utils_colours__WEBPACK_IMPORTED_MODULE_1__.bgColourMap[data["order_number"]],
      borderColor: "rgb(0,0,0)",
      borderWidth: 0.4,
    };
  });

const optimisedLatenessData = [
  (0,_utils_lateness__WEBPACK_IMPORTED_MODULE_2__.sumLateness)(_data_optsched_json__WEBPACK_IMPORTED_MODULE_0__) / _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__.length,
  (0,_utils_lateness__WEBPACK_IMPORTED_MODULE_2__.sumLateness)(_data_optsched_json__WEBPACK_IMPORTED_MODULE_0__),
];

const unoptimisedLateness = (0,_utils_lateness__WEBPACK_IMPORTED_MODULE_2__.calculateLateness)(vfChartBeforeData);

const unoptimisedLatenessData = [
  unoptimisedLateness / _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__.length,
  unoptimisedLateness,
];


/***/ }),

/***/ "./src/scheduling/scripts/charts/comparisonChart.js":
/*!**********************************************************!*\
  !*** ./src/scheduling/scripts/charts/comparisonChart.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comparisonChart": () => (/* binding */ comparisonChart)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js");
/* harmony import */ var _chartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartData */ "./src/scheduling/scripts/charts/chartData.js");




chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"].register(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__["default"]);

const comparisonCtx = document.getElementById("comparisonChart");

const comparisonChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](comparisonCtx, {
  type: "bar",
  labels: ["average", "sum"],
  data: {
    labels: ["Average Lateness", "Total Lateness"],
    datasets: [
      {
        label: "Unoptimised",
        data: _chartData__WEBPACK_IMPORTED_MODULE_2__.unoptimisedLatenessData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 0.4,
      },
      {
        label: "Optimised",
        data: _chartData__WEBPACK_IMPORTED_MODULE_2__.optimisedLatenessData,
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


/***/ }),

/***/ "./src/scheduling/scripts/charts/scheduleCharts.js":
/*!*********************************************************!*\
  !*** ./src/scheduling/scripts/charts/scheduleCharts.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "afterChart": () => (/* binding */ afterChart),
/* harmony export */   "beforeChart": () => (/* binding */ beforeChart)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js");
/* harmony import */ var _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/optsched.json */ "./src/scheduling/scripts/data/optsched.json");
/* harmony import */ var _utils_colours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/colours */ "./src/scheduling/scripts/utils/colours.js");
/* harmony import */ var _utils_eventHandlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/eventHandlers */ "./src/scheduling/scripts/utils/eventHandlers.js");
/* harmony import */ var _chartData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chartData */ "./src/scheduling/scripts/charts/chartData.js");
/* harmony import */ var _utils_annotations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/annotations */ "./src/scheduling/scripts/utils/annotations.js");









chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"].register(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__["default"]);

const beforeCtx = document.getElementById("beforeChart");
const afterCtx = document.getElementById("afterChart");

const beforeChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](beforeCtx, {
  type: "bar",
  data: {
    labels: ["Before Optimisation"],
    datasets: _chartData__WEBPACK_IMPORTED_MODULE_5__.vfChartBeforeData,
  },
  options: {
    onClick: _utils_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.barClickHandler,

    plugins: {
      legend: {
        title: {
          display: true,
          text: "order number",
        },
        onClick: _utils_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.legendClickHandler,
      },
      annotation: {
        drawTime: "beforeDatasetsDraw",
        annotations: () => (0,_utils_annotations__WEBPACK_IMPORTED_MODULE_6__.getDeadlineAnnotations)(_data_optsched_json__WEBPACK_IMPORTED_MODULE_2__, _utils_colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap),
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
    datasets: _chartData__WEBPACK_IMPORTED_MODULE_5__.vfChartAfterData,
  },
  options: {
    onClick: _utils_eventHandlers__WEBPACK_IMPORTED_MODULE_4__.barClickHandler,
    plugins: {
      tooltip: {
        callbacks: {
          beforeLabel: function (context) {
            const orderNumber = context.dataset.label;
            const orderObj = _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__.find(
              (order) => order.order_number == orderNumber
            );
            return `${orderObj["original_sequence"]} => ${orderObj["sequence"]}`;
          },
        },
      },
      legend: { display: false },
      annotation: {
        annotations: () => (0,_utils_annotations__WEBPACK_IMPORTED_MODULE_6__.getDeadlineAnnotations)(_data_optsched_json__WEBPACK_IMPORTED_MODULE_2__, _utils_colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap),
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


/***/ }),

/***/ "./src/scheduling/scripts/main.js":
/*!****************************************!*\
  !*** ./src/scheduling/scripts/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/scheduling/style.css");
/* harmony import */ var _charts_comparisonChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts/comparisonChart */ "./src/scheduling/scripts/charts/comparisonChart.js");
/* harmony import */ var _charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charts/scheduleCharts */ "./src/scheduling/scripts/charts/scheduleCharts.js");




// chart.update is not really necessary
// only included here so we can import in charts
// and so this file can be used as entry point for webpack

_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_2__.beforeChart.update();
_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_2__.afterChart.update();
_charts_comparisonChart__WEBPACK_IMPORTED_MODULE_1__.comparisonChart.update();

// TODO: add cleaning schedule optimisation


/***/ }),

/***/ "./src/scheduling/scripts/utils/annotations.js":
/*!*****************************************************!*\
  !*** ./src/scheduling/scripts/utils/annotations.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterAnnotations": () => (/* binding */ filterAnnotations),
/* harmony export */   "getDeadlineAnnotations": () => (/* binding */ getDeadlineAnnotations),
/* harmony export */   "getLatenessAnnotation": () => (/* binding */ getLatenessAnnotation)
/* harmony export */ });
function getDeadlineAnnotations(vfData, bgColourMap) {
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

function filterAnnotations(chart, orderNumber, vfData, bgColourMap) {
  const otherOrderData = chart.data.datasets.filter(
    (data) => data.label !== orderNumber
  );
  const otherOrderNumbers = otherOrderData.map((data) => data.label);
  const annotations = getDeadlineAnnotations(vfData, bgColourMap);
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


/***/ }),

/***/ "./src/scheduling/scripts/utils/colours.js":
/*!*************************************************!*\
  !*** ./src/scheduling/scripts/utils/colours.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bgColourMap": () => (/* binding */ bgColourMap)
/* harmony export */ });
/* harmony import */ var _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/optsched.json */ "./src/scheduling/scripts/data/optsched.json");


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

_data_optsched_json__WEBPACK_IMPORTED_MODULE_0__.forEach((order, idx) => {
  bgColourMap[order["order_number"]] = colours[idx];
});


/***/ }),

/***/ "./src/scheduling/scripts/utils/eventHandlers.js":
/*!*******************************************************!*\
  !*** ./src/scheduling/scripts/utils/eventHandlers.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "barClickHandler": () => (/* binding */ barClickHandler),
/* harmony export */   "filterOrders": () => (/* binding */ filterOrders),
/* harmony export */   "legendClickHandler": () => (/* binding */ legendClickHandler)
/* harmony export */ });
/* harmony import */ var _charts_chartData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../charts/chartData */ "./src/scheduling/scripts/charts/chartData.js");
/* harmony import */ var _charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../charts/scheduleCharts */ "./src/scheduling/scripts/charts/scheduleCharts.js");
/* harmony import */ var _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/optsched.json */ "./src/scheduling/scripts/data/optsched.json");
/* harmony import */ var _colours__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colours */ "./src/scheduling/scripts/utils/colours.js");
/* harmony import */ var _annotations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./annotations */ "./src/scheduling/scripts/utils/annotations.js");







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
      order.backgroundColor = _colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap[order.label];
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
  filterOrders(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.beforeChart, selectedOrderNumber);
  filterOrders(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.afterChart, selectedOrderNumber);
  (0,_annotations__WEBPACK_IMPORTED_MODULE_4__.filterAnnotations)(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.beforeChart, selectedOrderNumber, _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__, _colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap);
  (0,_annotations__WEBPACK_IMPORTED_MODULE_4__.filterAnnotations)(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.afterChart, selectedOrderNumber, _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__, _colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap);
}

function barClickHandler(event, elements) {
  let data;
  if (event.chart.canvas.id === "afterChart") {
    data = _charts_chartData__WEBPACK_IMPORTED_MODULE_0__.vfChartAfterData[elements[0].datasetIndex];
  } else if (event.chart.canvas.id === "beforeChart") {
    data = _charts_chartData__WEBPACK_IMPORTED_MODULE_0__.vfChartBeforeData[elements[0].datasetIndex];
  }
  filterOrders(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.beforeChart, data.label);
  filterOrders(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.afterChart, data.label);
  (0,_annotations__WEBPACK_IMPORTED_MODULE_4__.filterAnnotations)(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.beforeChart, data.label, _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__, _colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap);
  (0,_annotations__WEBPACK_IMPORTED_MODULE_4__.filterAnnotations)(_charts_scheduleCharts__WEBPACK_IMPORTED_MODULE_1__.afterChart, data.label, _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__, _colours__WEBPACK_IMPORTED_MODULE_3__.bgColourMap);
  const orderObj = _data_optsched_json__WEBPACK_IMPORTED_MODULE_2__.filter(
    (order) => order.order_number == data.label
  )[0];
  const orderDetailsCard = document.getElementById("detailInfo");
  orderDetailsCard.innerText = JSON.stringify(orderObj);
}


/***/ }),

/***/ "./src/scheduling/scripts/utils/lateness.js":
/*!**************************************************!*\
  !*** ./src/scheduling/scripts/utils/lateness.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateLateness": () => (/* binding */ calculateLateness),
/* harmony export */   "sumLateness": () => (/* binding */ sumLateness)
/* harmony export */ });
/* harmony import */ var _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/optsched.json */ "./src/scheduling/scripts/data/optsched.json");


function calculateLateness(vfChartData) {
  // calculate lateness from chart data
  let unoptimisedOrderLateness = 0;
  let currTime = 0;

  vfChartData.forEach((order) => {
    const orderDeadline = _data_optsched_json__WEBPACK_IMPORTED_MODULE_0__.find(
      (vfOrder) => vfOrder.order_number === order.label
    )["dead_line"];
    currTime += Number(order.data);
    const orderLateness = currTime - orderDeadline;
    if (orderLateness > 0) unoptimisedOrderLateness += orderLateness;
    // dont negate lateness for early orders
  });
  return unoptimisedOrderLateness;
}

function sumLateness(vfData) {
  // calculate lateness from vf data

  return vfData.reduce((prev, curr) => {
    if (!curr["tardiness_flag"]) {
      // dont negate lateness for early orders
      return prev + curr["tardiness_duration"];
    }
    return prev;
  }, 0);
}


/***/ }),

/***/ "./src/scheduling/scripts/data/optsched.json":
/*!***************************************************!*\
  !*** ./src/scheduling/scripts/data/optsched.json ***!
  \***************************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"sequence":1,"original_sequence":5,"order_number":805,"process_time":122.03389830508475,"priority":3,"dead_line":0,"start_time":0,"end_time":122.03389830508475,"tardiness_flag":false,"tardiness_duration":122.03389830508475},{"sequence":2,"original_sequence":6,"order_number":806,"process_time":238.41059602649008,"priority":1,"dead_line":0,"start_time":122.03389830508475,"end_time":360.44449433157484,"tardiness_flag":false,"tardiness_duration":360.44449433157484},{"sequence":3,"original_sequence":1,"order_number":801,"process_time":258.9928057553957,"priority":1,"dead_line":600,"start_time":360.44449433157484,"end_time":619.4373000869705,"tardiness_flag":false,"tardiness_duration":19.43730008697048},{"sequence":4,"original_sequence":2,"order_number":802,"process_time":130.43478260869566,"priority":2,"dead_line":700,"start_time":619.4373000869705,"end_time":749.8720826956661,"tardiness_flag":false,"tardiness_duration":49.87208269566611},{"sequence":5,"original_sequence":4,"order_number":804,"process_time":461.53846153846155,"priority":1,"dead_line":0,"start_time":749.8720826956661,"end_time":1211.4105442341277,"tardiness_flag":false,"tardiness_duration":1211.4105442341277},{"sequence":6,"original_sequence":3,"order_number":803,"process_time":238.41059602649008,"priority":1,"dead_line":2000,"start_time":1211.4105442341277,"end_time":1449.8211402606178,"tardiness_flag":true,"tardiness_duration":-550.1788597393822}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_auto_auto_esm_js-node_modules_chartjs-plugin-annotation_dist_ch-e852d4"], () => (__webpack_exec__("./src/scheduling/scripts/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxnRUFBaUI7QUFDNUI7QUFDQSxlQUFlLCtEQUFXO0FBQzFCLGVBQWUsOERBQVU7QUFDekIsRUFBRSwrREFBaUIsQ0FBQywrREFBVyxjQUFjLGdEQUFNLEVBQUUsaURBQVc7QUFDaEUsRUFBRSwrREFBaUIsQ0FBQyw4REFBVSxjQUFjLGdEQUFNLEVBQUUsaURBQVc7QUFDL0QsbUJBQW1CLHVEQUFhO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0QyQzs7QUFFcEM7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIscURBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NjaGVkdWxpbmcvc3R5bGUuY3NzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2NoZWR1bGluZy9zdHlsZS5jc3M/MTkyZSIsIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NjaGVkdWxpbmcvc2NyaXB0cy9jaGFydHMvY2hhcnREYXRhLmpzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2NoZWR1bGluZy9zY3JpcHRzL2NoYXJ0cy9jb21wYXJpc29uQ2hhcnQuanMiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy9zY2hlZHVsaW5nL3NjcmlwdHMvY2hhcnRzL3NjaGVkdWxlQ2hhcnRzLmpzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2NoZWR1bGluZy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy9zY2hlZHVsaW5nL3NjcmlwdHMvdXRpbHMvYW5ub3RhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy9zY2hlZHVsaW5nL3NjcmlwdHMvdXRpbHMvY29sb3Vycy5qcyIsIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NjaGVkdWxpbmcvc2NyaXB0cy91dGlscy9ldmVudEhhbmRsZXJzLmpzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2NoZWR1bGluZy9zY3JpcHRzL3V0aWxzL2xhdGVuZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIG1heC13aWR0aDogMTA4MHB4OyBcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IFxcblxcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IFxcbn1cXG5cXG5oMSwgaDIsICNkZXRhaWxJbmZve1xcbiAgICBkaXNwbGF5OmZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcXG4gICAgcGFkZGluZzoxMHB4XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY2hlZHVsaW5nL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIG1heC13aWR0aDogMTA4MHB4OyBcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IFxcblxcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IFxcbn1cXG5cXG5oMSwgaDIsICNkZXRhaWxJbmZve1xcbiAgICBkaXNwbGF5OmZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcXG4gICAgcGFkZGluZzoxMHB4XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgdmZEYXRhIGZyb20gXCIuLi9kYXRhL29wdHNjaGVkLmpzb25cIjtcbmltcG9ydCB7IGJnQ29sb3VyTWFwIH0gZnJvbSBcIi4uL3V0aWxzL2NvbG91cnNcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUxhdGVuZXNzLCBzdW1MYXRlbmVzcyB9IGZyb20gXCIuLi91dGlscy9sYXRlbmVzc1wiO1xuXG5leHBvcnQgY29uc3QgdmZDaGFydEJlZm9yZURhdGEgPSB2ZkRhdGFcbiAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICByZXR1cm4gYVtcIm9yaWdpbmFsX3NlcXVlbmNlXCJdIC0gYltcIm9yaWdpbmFsX3NlcXVlbmNlXCJdO1xuICB9KVxuICAubWFwKChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFtkYXRhW1wicHJvY2Vzc190aW1lXCJdXSxcbiAgICAgIGxhYmVsOiBkYXRhW1wib3JkZXJfbnVtYmVyXCJdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG91ck1hcFtkYXRhW1wib3JkZXJfbnVtYmVyXCJdXSxcbiAgICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgIGJvcmRlcldpZHRoOiAwLjQsXG4gICAgfTtcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB2ZkNoYXJ0QWZ0ZXJEYXRhID0gdmZEYXRhXG4gIC5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGFbXCJzZXF1ZW5jZVwiXSAtIGJbXCJzZXF1ZW5jZVwiXTtcbiAgfSlcbiAgLm1hcCgoZGF0YSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbZGF0YVtcInByb2Nlc3NfdGltZVwiXV0sXG4gICAgICBsYWJlbDogZGF0YVtcIm9yZGVyX251bWJlclwiXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmdDb2xvdXJNYXBbZGF0YVtcIm9yZGVyX251bWJlclwiXV0sXG4gICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMCwwLDApXCIsXG4gICAgICBib3JkZXJXaWR0aDogMC40LFxuICAgIH07XG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgb3B0aW1pc2VkTGF0ZW5lc3NEYXRhID0gW1xuICBzdW1MYXRlbmVzcyh2ZkRhdGEpIC8gdmZEYXRhLmxlbmd0aCxcbiAgc3VtTGF0ZW5lc3ModmZEYXRhKSxcbl07XG5cbmNvbnN0IHVub3B0aW1pc2VkTGF0ZW5lc3MgPSBjYWxjdWxhdGVMYXRlbmVzcyh2ZkNoYXJ0QmVmb3JlRGF0YSk7XG5cbmV4cG9ydCBjb25zdCB1bm9wdGltaXNlZExhdGVuZXNzRGF0YSA9IFtcbiAgdW5vcHRpbWlzZWRMYXRlbmVzcyAvIHZmRGF0YS5sZW5ndGgsXG4gIHVub3B0aW1pc2VkTGF0ZW5lc3MsXG5dO1xuIiwiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgYW5ub3RhdGlvblBsdWdpbiBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiO1xuaW1wb3J0IHsgb3B0aW1pc2VkTGF0ZW5lc3NEYXRhLCB1bm9wdGltaXNlZExhdGVuZXNzRGF0YSB9IGZyb20gXCIuL2NoYXJ0RGF0YVwiO1xuXG5DaGFydC5yZWdpc3Rlcihhbm5vdGF0aW9uUGx1Z2luKTtcblxuY29uc3QgY29tcGFyaXNvbkN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tcGFyaXNvbkNoYXJ0XCIpO1xuXG5leHBvcnQgY29uc3QgY29tcGFyaXNvbkNoYXJ0ID0gbmV3IENoYXJ0KGNvbXBhcmlzb25DdHgsIHtcbiAgdHlwZTogXCJiYXJcIixcbiAgbGFiZWxzOiBbXCJhdmVyYWdlXCIsIFwic3VtXCJdLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBbXCJBdmVyYWdlIExhdGVuZXNzXCIsIFwiVG90YWwgTGF0ZW5lc3NcIl0sXG4gICAgZGF0YXNldHM6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiVW5vcHRpbWlzZWRcIixcbiAgICAgICAgZGF0YTogdW5vcHRpbWlzZWRMYXRlbmVzc0RhdGEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yKVwiLFxuICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2IoMCwwLDApXCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiAwLjQsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogXCJPcHRpbWlzZWRcIixcbiAgICAgICAgZGF0YTogb3B0aW1pc2VkTGF0ZW5lc3NEYXRhLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDAsMCwwKVwiLFxuICAgICAgICBib3JkZXJXaWR0aDogMC40LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgLy8gfSxcbiAgICBzY2FsZXM6IHtcbiAgICAgIHg6IHtcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgICAgYWZ0ZXJGaXQ6IGZ1bmN0aW9uIChzY2FsZUluc3RhbmNlKSB7XG4gICAgICAgICAgc2NhbGVJbnN0YW5jZS53aWR0aCA9IDEyMDsgLy8gc2V0cyB0aGUgd2lkdGggdG8gMTAwcHhcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IENoYXJ0IGZyb20gXCJjaGFydC5qcy9hdXRvXCI7XG5pbXBvcnQgYW5ub3RhdGlvblBsdWdpbiBmcm9tIFwiY2hhcnRqcy1wbHVnaW4tYW5ub3RhdGlvblwiO1xuaW1wb3J0IHZmRGF0YSBmcm9tIFwiLi4vZGF0YS9vcHRzY2hlZC5qc29uXCI7XG5pbXBvcnQgeyBiZ0NvbG91ck1hcCB9IGZyb20gXCIuLi91dGlscy9jb2xvdXJzXCI7XG5pbXBvcnQgeyBiYXJDbGlja0hhbmRsZXIsIGxlZ2VuZENsaWNrSGFuZGxlciB9IGZyb20gXCIuLi91dGlscy9ldmVudEhhbmRsZXJzXCI7XG5pbXBvcnQgeyB2ZkNoYXJ0QWZ0ZXJEYXRhLCB2ZkNoYXJ0QmVmb3JlRGF0YSB9IGZyb20gXCIuL2NoYXJ0RGF0YVwiO1xuXG5pbXBvcnQgeyBnZXREZWFkbGluZUFubm90YXRpb25zIH0gZnJvbSBcIi4uL3V0aWxzL2Fubm90YXRpb25zXCI7XG5cbkNoYXJ0LnJlZ2lzdGVyKGFubm90YXRpb25QbHVnaW4pO1xuXG5jb25zdCBiZWZvcmVDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlZm9yZUNoYXJ0XCIpO1xuY29uc3QgYWZ0ZXJDdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFmdGVyQ2hhcnRcIik7XG5cbmV4cG9ydCBjb25zdCBiZWZvcmVDaGFydCA9IG5ldyBDaGFydChiZWZvcmVDdHgsIHtcbiAgdHlwZTogXCJiYXJcIixcbiAgZGF0YToge1xuICAgIGxhYmVsczogW1wiQmVmb3JlIE9wdGltaXNhdGlvblwiXSxcbiAgICBkYXRhc2V0czogdmZDaGFydEJlZm9yZURhdGEsXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBvbkNsaWNrOiBiYXJDbGlja0hhbmRsZXIsXG5cbiAgICBwbHVnaW5zOiB7XG4gICAgICBsZWdlbmQ6IHtcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICAgIHRleHQ6IFwib3JkZXIgbnVtYmVyXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGxlZ2VuZENsaWNrSGFuZGxlcixcbiAgICAgIH0sXG4gICAgICBhbm5vdGF0aW9uOiB7XG4gICAgICAgIGRyYXdUaW1lOiBcImJlZm9yZURhdGFzZXRzRHJhd1wiLFxuICAgICAgICBhbm5vdGF0aW9uczogKCkgPT4gZ2V0RGVhZGxpbmVBbm5vdGF0aW9ucyh2ZkRhdGEsIGJnQ29sb3VyTWFwKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBpbmRleEF4aXM6IFwieVwiLFxuICAgIHNjYWxlczoge1xuICAgICAgeDoge1xuICAgICAgICBzdGFja2VkOiB0cnVlLFxuICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB5OiB7XG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgICBhZnRlckZpdDogZnVuY3Rpb24gKHNjYWxlSW5zdGFuY2UpIHtcbiAgICAgICAgICBzY2FsZUluc3RhbmNlLndpZHRoID0gMTIwOyAvLyBzZXRzIHRoZSB3aWR0aCB0byAxMDBweFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBhZnRlckNoYXJ0ID0gbmV3IENoYXJ0KGFmdGVyQ3R4LCB7XG4gIHR5cGU6IFwiYmFyXCIsXG4gIGRhdGE6IHtcbiAgICBsYWJlbHM6IFtcIkFmdGVyIE9wdGltaXNhdGlvblwiXSxcbiAgICBkYXRhc2V0czogdmZDaGFydEFmdGVyRGF0YSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIG9uQ2xpY2s6IGJhckNsaWNrSGFuZGxlcixcbiAgICBwbHVnaW5zOiB7XG4gICAgICB0b29sdGlwOiB7XG4gICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgIGJlZm9yZUxhYmVsOiBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgY29uc3Qgb3JkZXJOdW1iZXIgPSBjb250ZXh0LmRhdGFzZXQubGFiZWw7XG4gICAgICAgICAgICBjb25zdCBvcmRlck9iaiA9IHZmRGF0YS5maW5kKFxuICAgICAgICAgICAgICAob3JkZXIpID0+IG9yZGVyLm9yZGVyX251bWJlciA9PSBvcmRlck51bWJlclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBgJHtvcmRlck9ialtcIm9yaWdpbmFsX3NlcXVlbmNlXCJdfSA9PiAke29yZGVyT2JqW1wic2VxdWVuY2VcIl19YDtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDogeyBkaXNwbGF5OiBmYWxzZSB9LFxuICAgICAgYW5ub3RhdGlvbjoge1xuICAgICAgICBhbm5vdGF0aW9uczogKCkgPT4gZ2V0RGVhZGxpbmVBbm5vdGF0aW9ucyh2ZkRhdGEsIGJnQ29sb3VyTWFwKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyB9LFxuICAgIGluZGV4QXhpczogXCJ5XCIsXG4gICAgc2NhbGVzOiB7XG4gICAgICB4OiB7XG4gICAgICAgIHN0YWNrZWQ6IHRydWUsXG4gICAgICAgIGJlZ2luQXRaZXJvOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHk6IHtcbiAgICAgICAgc3RhY2tlZDogdHJ1ZSxcbiAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXG4gICAgICAgIGFmdGVyRml0OiBmdW5jdGlvbiAoc2NhbGVJbnN0YW5jZSkge1xuICAgICAgICAgIHNjYWxlSW5zdGFuY2Uud2lkdGggPSAxMjA7IC8vIHNldHMgdGhlIHdpZHRoIHRvIDEwMHB4XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KTtcbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgY29tcGFyaXNvbkNoYXJ0IH0gZnJvbSBcIi4vY2hhcnRzL2NvbXBhcmlzb25DaGFydFwiO1xuaW1wb3J0IHsgYWZ0ZXJDaGFydCwgYmVmb3JlQ2hhcnQgfSBmcm9tIFwiLi9jaGFydHMvc2NoZWR1bGVDaGFydHNcIjtcblxuLy8gY2hhcnQudXBkYXRlIGlzIG5vdCByZWFsbHkgbmVjZXNzYXJ5XG4vLyBvbmx5IGluY2x1ZGVkIGhlcmUgc28gd2UgY2FuIGltcG9ydCBpbiBjaGFydHNcbi8vIGFuZCBzbyB0aGlzIGZpbGUgY2FuIGJlIHVzZWQgYXMgZW50cnkgcG9pbnQgZm9yIHdlYnBhY2tcblxuYmVmb3JlQ2hhcnQudXBkYXRlKCk7XG5hZnRlckNoYXJ0LnVwZGF0ZSgpO1xuY29tcGFyaXNvbkNoYXJ0LnVwZGF0ZSgpO1xuXG4vLyBUT0RPOiBhZGQgY2xlYW5pbmcgc2NoZWR1bGUgb3B0aW1pc2F0aW9uXG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0RGVhZGxpbmVBbm5vdGF0aW9ucyh2ZkRhdGEsIGJnQ29sb3VyTWFwKSB7XG4gIC8vIGR5bmFtaWNhbGx5IGFkZCBhbm5vdGF0aW9uc1xuICBjb25zdCBkZWFkTGluZXMgPSB7fTtcbiAgdmZEYXRhLmZvckVhY2goKG9yZGVyLCBpZHgpID0+IHtcbiAgICBkZWFkTGluZXNbb3JkZXJbXCJvcmRlcl9udW1iZXJcIl1dID0ge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBsYWJlbDoge1xuICAgICAgICBlbmFibGVkOiAoY3R4KSA9PiBjdHguaG92ZXJlZCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgICAgZHJhd1RpbWU6IFwiYWZ0ZXJEYXRhc2V0c0RyYXdcIixcbiAgICAgICAgcG9zaXRpb246IChjdHgpID0+IGN0eC5ob3ZlclBvc2l0aW9uLFxuICAgICAgICBjb250ZW50OiAoY3R4KSA9PiBbXG4gICAgICAgICAgYE9yZGVyICR7b3JkZXJbXCJvcmRlcl9udW1iZXJcIl19IGRlYWRsaW5lOmAsXG4gICAgICAgICAgYCR7b3JkZXJbXCJkZWFkX2xpbmVcIl19YCxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB5TWluOiAtMTAwLFxuICAgICAgeU1heDogMTAwLFxuICAgICAgeE1pbjogb3JkZXJbXCJkZWFkX2xpbmVcIl0sXG4gICAgICB4TWF4OiBvcmRlcltcImRlYWRfbGluZVwiXSxcbiAgICAgIGJvcmRlckNvbG9yOiBiZ0NvbG91ck1hcFtvcmRlcltcIm9yZGVyX251bWJlclwiXV0sXG4gICAgICBib3JkZXJXaWR0aDogNSxcbiAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICBlbnRlcihjdHgsIGV2ZW50KSB7XG4gICAgICAgIGN0eC5ob3ZlcmVkID0gdHJ1ZTtcbiAgICAgICAgY3R4LmhvdmVyUG9zaXRpb24gPSAoZXZlbnQueCAvIGN0eC5jaGFydC5jaGFydEFyZWEud2lkdGgpICogMTAwICsgXCIlXCI7XG4gICAgICAgIGN0eC5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICBsZWF2ZShjdHgsIGV2ZW50KSB7XG4gICAgICAgIGN0eC5ob3ZlcmVkID0gZmFsc2U7XG4gICAgICAgIGN0eC5jaGFydC51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBkZWFkTGluZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJBbm5vdGF0aW9ucyhjaGFydCwgb3JkZXJOdW1iZXIsIHZmRGF0YSwgYmdDb2xvdXJNYXApIHtcbiAgY29uc3Qgb3RoZXJPcmRlckRhdGEgPSBjaGFydC5kYXRhLmRhdGFzZXRzLmZpbHRlcihcbiAgICAoZGF0YSkgPT4gZGF0YS5sYWJlbCAhPT0gb3JkZXJOdW1iZXJcbiAgKTtcbiAgY29uc3Qgb3RoZXJPcmRlck51bWJlcnMgPSBvdGhlck9yZGVyRGF0YS5tYXAoKGRhdGEpID0+IGRhdGEubGFiZWwpO1xuICBjb25zdCBhbm5vdGF0aW9ucyA9IGdldERlYWRsaW5lQW5ub3RhdGlvbnModmZEYXRhLCBiZ0NvbG91ck1hcCk7XG4gIC8vIGNoZWNrIGZpcnN0IGFubm90YXRpb25cbiAgY29uc3QgaXNGaWx0ZXJlZCA9XG4gICAgY2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbb3RoZXJPcmRlck51bWJlcnNbMF1dXG4gICAgICAuYm9yZGVyQ29sb3IgPT09IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICBpZiAoIWlzRmlsdGVyZWQpIHtcbiAgICAvLyBtYWtlIGFsbCBvdGhlciBvcmRlciBhbm5vdGF0aW9ucyB0cmFuc3BhcmVudFxuICAgIG90aGVyT3JkZXJOdW1iZXJzLmZvckVhY2goKG9yZGVyTnVtKSA9PiB7XG4gICAgICBhbm5vdGF0aW9uc1tvcmRlck51bV0uYm9yZGVyQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIjtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNlbGVjdGVkT3JkZXJEYXRhID0gdmZEYXRhLmZpbmQoXG4gICAgICAob3JkZXIpID0+IG9yZGVyLm9yZGVyX251bWJlciA9PSBvcmRlck51bWJlclxuICAgICk7XG4gICAgLy8gYWRkIGxhdGVuZXNzIGFubm90YXRpb25zXG4gICAgY29uc3QgbGF0ZW5lc3NBbm5vdGF0aW9uID0gZ2V0TGF0ZW5lc3NBbm5vdGF0aW9uKGNoYXJ0LCBzZWxlY3RlZE9yZGVyRGF0YSk7XG4gICAgYW5ub3RhdGlvbnNbXCJsYXRlbmVzc1wiXSA9IGxhdGVuZXNzQW5ub3RhdGlvbjtcbiAgfVxuICBjaGFydC5vcHRpb25zLnBsdWdpbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuXG4gIGNoYXJ0LnVwZGF0ZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF0ZW5lc3NBbm5vdGF0aW9uKGNoYXJ0LCBvcmRlckRhdGEpIHtcbiAgY29uc3Qgb3JkZXJOdW1iZXIgPSBvcmRlckRhdGFbXCJvcmRlcl9udW1iZXJcIl07XG4gIGxldCBlbmRUaW1lID0gb3JkZXJEYXRhW1wiZW5kX3RpbWVcIl07XG4gIGxldCBpc0xhdGUgPSAhb3JkZXJEYXRhW1widGFyZGluZXNzX2ZsYWdcIl07XG4gIGxldCBsYXRlbmVzc0R1cmF0aW9uID0gb3JkZXJEYXRhW1widGFyZGluZXNzX2R1cmF0aW9uXCJdO1xuXG4gIGlmIChjaGFydC5jYW52YXMuaWQgPT09IFwiYmVmb3JlQ2hhcnRcIikge1xuICAgIC8vIGNhbGN1bGF0ZSBlbmQgdGltZSBmb3IgYmVmb3JlIG9wdGltaXNhdGlvblxuICAgIGNvbnN0IGNoYXJ0RGF0YSA9IGNoYXJ0LmRhdGEuZGF0YXNldHM7XG4gICAgY29uc3Qgb3JkZXJPYmogPSBjaGFydERhdGEuZmluZCgoZGF0YSkgPT4gZGF0YS5sYWJlbCA9PT0gb3JkZXJOdW1iZXIpO1xuICAgIGNvbnN0IG9yZGVySWR4ID0gY2hhcnREYXRhLmluZGV4T2Yob3JkZXJPYmopO1xuICAgIC8vIGRhdGFzZXQgaXMgb3JkZXJlZCBieSBzZXF1ZW5jZVxuICAgIC8vIGdyYWIgYWxsIGRhdGFzZXRzIGV4Y2VwdCB3b3JrIG9yZGVycyBhZnRlciBjdXJyZW50XG4gICAgY29uc3QgcHJldk9yZGVycyA9IGNoYXJ0RGF0YS5zbGljZSgwLCBvcmRlcklkeCArIDEpO1xuXG4gICAgLy8gc3VtIHVwIGFsbCB2YWx1ZXMgb2YgcmVtYWluaW5nIHdvcmsgb3JkZXJzXG4gICAgZW5kVGltZSA9IHByZXZPcmRlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgICByZXR1cm4gcHJldiArIGN1cnIuZGF0YVswXTtcbiAgICB9LCAwKTtcblxuICAgIC8vIGNhbGN1bGF0ZSBsYXRlbmVzcyBmb3IgYmVmb3JlIGNoYXJ0XG4gICAgbGF0ZW5lc3NEdXJhdGlvbiA9IGVuZFRpbWUgLSBvcmRlckRhdGFbXCJkZWFkX2xpbmVcIl07XG4gICAgaXNMYXRlID0gbGF0ZW5lc3NEdXJhdGlvbiA+IDA7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImxpbmVcIixcbiAgICBsYWJlbDoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2IoMCwwLDApXCIsXG4gICAgICBkcmF3VGltZTogXCJhZnRlckRhdGFzZXRzRHJhd1wiLFxuICAgICAgY29udGVudDogKGN0eCkgPT5cbiAgICAgICAgaXNMYXRlXG4gICAgICAgICAgPyBbXCJsYXRlIGJ5OlwiLCBNYXRoLnJvdW5kKGxhdGVuZXNzRHVyYXRpb24pXVxuICAgICAgICAgIDogW1wiZWFybHkgYnk6XCIsIC1NYXRoLnJvdW5kKGxhdGVuZXNzRHVyYXRpb24pXSxcbiAgICB9LFxuICAgIGFycm93SGVhZHM6IHtcbiAgICAgIHN0YXJ0OiB7XG4gICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICAgIH0sXG4gICAgICBlbmQ6IHtcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDAsMCwwKVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHhNYXg6IG9yZGVyRGF0YVtcImRlYWRfbGluZVwiXSxcbiAgICB4TWluOiBlbmRUaW1lLFxuICAgIHhTY2FsZUlEOiBcInhcIixcbiAgICB5TWF4OiAwLFxuICAgIHlNaW46IDAsXG4gICAgeVNjYWxlSUQ6IFwieVwiLFxuICAgIGJvcmRlckNvbG9yOiBcInJnYigwLDAsMClcIixcbiAgICBib3JkZXJXaWR0aDogMyxcbiAgICBkaXNwbGF5OiB0cnVlLFxuICB9O1xufVxuIiwiaW1wb3J0IHZmRGF0YSBmcm9tIFwiLi4vZGF0YS9vcHRzY2hlZC5qc29uXCI7XG5cbmNvbnN0IGNvbG91cnMgPSBbXG4gIFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMilcIixcbiAgXCJyZ2JhKDI1NSwgMTU5LCA2NCwgMC4yKVwiLFxuICBcInJnYmEoMjU1LCAyMDUsIDg2LCAwLjIpXCIsXG4gIFwicmdiYSg3NSwgMTkyLCAxOTIsIDAuMilcIixcbiAgXCJyZ2JhKDU0LCAxNjIsIDIzNSwgMC4yKVwiLFxuICBcInJnYmEoMTUzLCAxMDIsIDI1NSwgMC4yKVwiLFxuICBcInJnYmEoMjAxLCAyMDMsIDIwNywgMC4yKVwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IGJnQ29sb3VyTWFwID0ge307XG5cbnZmRGF0YS5mb3JFYWNoKChvcmRlciwgaWR4KSA9PiB7XG4gIGJnQ29sb3VyTWFwW29yZGVyW1wib3JkZXJfbnVtYmVyXCJdXSA9IGNvbG91cnNbaWR4XTtcbn0pO1xuIiwiaW1wb3J0IHsgdmZDaGFydEFmdGVyRGF0YSwgdmZDaGFydEJlZm9yZURhdGEgfSBmcm9tIFwiLi4vY2hhcnRzL2NoYXJ0RGF0YVwiO1xuaW1wb3J0IHsgYWZ0ZXJDaGFydCwgYmVmb3JlQ2hhcnQgfSBmcm9tIFwiLi4vY2hhcnRzL3NjaGVkdWxlQ2hhcnRzXCI7XG5pbXBvcnQgdmZEYXRhIGZyb20gXCIuLi9kYXRhL29wdHNjaGVkLmpzb25cIjtcbmltcG9ydCB7IGJnQ29sb3VyTWFwIH0gZnJvbSBcIi4vY29sb3Vyc1wiO1xuXG5pbXBvcnQgeyBmaWx0ZXJBbm5vdGF0aW9ucyB9IGZyb20gXCIuL2Fubm90YXRpb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJPcmRlcnMoY2hhcnQsIG9yZGVyTnVtYmVyKSB7XG4gIC8vIHJlbW92ZXMgYm9yZGVyc1xuICAvLyBtYWtlcyBhbGwgb3RoZXIgb3JkZXJzIHRyYW5zcGFyZW50XG4gIGNvbnN0IG90aGVyT3JkZXJEYXRhID0gY2hhcnQuZGF0YS5kYXRhc2V0cy5maWx0ZXIoXG4gICAgKGRhdGEpID0+IGRhdGEubGFiZWwgIT09IG9yZGVyTnVtYmVyXG4gICk7XG4gIGNvbnN0IHNlbGVjdGVkT3JkZXJEYXRhID0gY2hhcnQuZGF0YS5kYXRhc2V0cy5maW5kKFxuICAgIChkYXRhKSA9PiBkYXRhLmxhYmVsID09PSBvcmRlck51bWJlclxuICApO1xuICAvLyBjaGVjayBmaXJzdCBkYXRhIG9ialxuICBjb25zdCBpc0ZpbHRlcmVkID1cbiAgICBvdGhlck9yZGVyRGF0YVswXS5iYWNrZ3JvdW5kQ29sb3IgPT09IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICBpZiAoaXNGaWx0ZXJlZCkge1xuICAgIC8vIGFkZCBib3JkZXIgYmFja1xuICAgIHNlbGVjdGVkT3JkZXJEYXRhLmJvcmRlckNvbG9yID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgLy8gdW5oaWRlIG90aGVyIG9yZGVyc1xuICAgIG90aGVyT3JkZXJEYXRhLmZvckVhY2goKG9yZGVyKSA9PiB7XG4gICAgICBvcmRlci5iYWNrZ3JvdW5kQ29sb3IgPSBiZ0NvbG91ck1hcFtvcmRlci5sYWJlbF07XG4gICAgICBvcmRlci5ib3JkZXJDb2xvciA9IFwicmdiKDAsMCwwKVwiO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIHJlbW92ZSBib3JkZXJcbiAgICBzZWxlY3RlZE9yZGVyRGF0YS5ib3JkZXJDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICAgIC8vIGhpZGUgb3RoZXIgb3JkZXJzXG4gICAgb3RoZXJPcmRlckRhdGEuZm9yRWFjaCgob3JkZXIpID0+IHtcbiAgICAgIG9yZGVyLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgyNTUsMjU1LDI1NSwwKVwiO1xuICAgICAgb3JkZXIuYm9yZGVyQ29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMClcIjtcbiAgICB9KTtcbiAgfVxuICBjaGFydC51cGRhdGUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZ2VuZENsaWNrSGFuZGxlcihlLCBsZWdlbmRJdGVtLCBsZWdlbmQpIHtcbiAgY29uc3Qgc2VsZWN0ZWRPcmRlck51bWJlciA9IGxlZ2VuZEl0ZW0udGV4dDtcbiAgZmlsdGVyT3JkZXJzKGJlZm9yZUNoYXJ0LCBzZWxlY3RlZE9yZGVyTnVtYmVyKTtcbiAgZmlsdGVyT3JkZXJzKGFmdGVyQ2hhcnQsIHNlbGVjdGVkT3JkZXJOdW1iZXIpO1xuICBmaWx0ZXJBbm5vdGF0aW9ucyhiZWZvcmVDaGFydCwgc2VsZWN0ZWRPcmRlck51bWJlciwgdmZEYXRhLCBiZ0NvbG91ck1hcCk7XG4gIGZpbHRlckFubm90YXRpb25zKGFmdGVyQ2hhcnQsIHNlbGVjdGVkT3JkZXJOdW1iZXIsIHZmRGF0YSwgYmdDb2xvdXJNYXApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFyQ2xpY2tIYW5kbGVyKGV2ZW50LCBlbGVtZW50cykge1xuICBsZXQgZGF0YTtcbiAgaWYgKGV2ZW50LmNoYXJ0LmNhbnZhcy5pZCA9PT0gXCJhZnRlckNoYXJ0XCIpIHtcbiAgICBkYXRhID0gdmZDaGFydEFmdGVyRGF0YVtlbGVtZW50c1swXS5kYXRhc2V0SW5kZXhdO1xuICB9IGVsc2UgaWYgKGV2ZW50LmNoYXJ0LmNhbnZhcy5pZCA9PT0gXCJiZWZvcmVDaGFydFwiKSB7XG4gICAgZGF0YSA9IHZmQ2hhcnRCZWZvcmVEYXRhW2VsZW1lbnRzWzBdLmRhdGFzZXRJbmRleF07XG4gIH1cbiAgZmlsdGVyT3JkZXJzKGJlZm9yZUNoYXJ0LCBkYXRhLmxhYmVsKTtcbiAgZmlsdGVyT3JkZXJzKGFmdGVyQ2hhcnQsIGRhdGEubGFiZWwpO1xuICBmaWx0ZXJBbm5vdGF0aW9ucyhiZWZvcmVDaGFydCwgZGF0YS5sYWJlbCwgdmZEYXRhLCBiZ0NvbG91ck1hcCk7XG4gIGZpbHRlckFubm90YXRpb25zKGFmdGVyQ2hhcnQsIGRhdGEubGFiZWwsIHZmRGF0YSwgYmdDb2xvdXJNYXApO1xuICBjb25zdCBvcmRlck9iaiA9IHZmRGF0YS5maWx0ZXIoXG4gICAgKG9yZGVyKSA9PiBvcmRlci5vcmRlcl9udW1iZXIgPT0gZGF0YS5sYWJlbFxuICApWzBdO1xuICBjb25zdCBvcmRlckRldGFpbHNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXRhaWxJbmZvXCIpO1xuICBvcmRlckRldGFpbHNDYXJkLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KG9yZGVyT2JqKTtcbn1cbiIsImltcG9ydCB2ZkRhdGEgZnJvbSBcIi4uL2RhdGEvb3B0c2NoZWQuanNvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTGF0ZW5lc3ModmZDaGFydERhdGEpIHtcbiAgLy8gY2FsY3VsYXRlIGxhdGVuZXNzIGZyb20gY2hhcnQgZGF0YVxuICBsZXQgdW5vcHRpbWlzZWRPcmRlckxhdGVuZXNzID0gMDtcbiAgbGV0IGN1cnJUaW1lID0gMDtcblxuICB2ZkNoYXJ0RGF0YS5mb3JFYWNoKChvcmRlcikgPT4ge1xuICAgIGNvbnN0IG9yZGVyRGVhZGxpbmUgPSB2ZkRhdGEuZmluZChcbiAgICAgICh2Zk9yZGVyKSA9PiB2Zk9yZGVyLm9yZGVyX251bWJlciA9PT0gb3JkZXIubGFiZWxcbiAgICApW1wiZGVhZF9saW5lXCJdO1xuICAgIGN1cnJUaW1lICs9IE51bWJlcihvcmRlci5kYXRhKTtcbiAgICBjb25zdCBvcmRlckxhdGVuZXNzID0gY3VyclRpbWUgLSBvcmRlckRlYWRsaW5lO1xuICAgIGlmIChvcmRlckxhdGVuZXNzID4gMCkgdW5vcHRpbWlzZWRPcmRlckxhdGVuZXNzICs9IG9yZGVyTGF0ZW5lc3M7XG4gICAgLy8gZG9udCBuZWdhdGUgbGF0ZW5lc3MgZm9yIGVhcmx5IG9yZGVyc1xuICB9KTtcbiAgcmV0dXJuIHVub3B0aW1pc2VkT3JkZXJMYXRlbmVzcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1bUxhdGVuZXNzKHZmRGF0YSkge1xuICAvLyBjYWxjdWxhdGUgbGF0ZW5lc3MgZnJvbSB2ZiBkYXRhXG5cbiAgcmV0dXJuIHZmRGF0YS5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICBpZiAoIWN1cnJbXCJ0YXJkaW5lc3NfZmxhZ1wiXSkge1xuICAgICAgLy8gZG9udCBuZWdhdGUgbGF0ZW5lc3MgZm9yIGVhcmx5IG9yZGVyc1xuICAgICAgcmV0dXJuIHByZXYgKyBjdXJyW1widGFyZGluZXNzX2R1cmF0aW9uXCJdO1xuICAgIH1cbiAgICByZXR1cm4gcHJldjtcbiAgfSwgMCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=