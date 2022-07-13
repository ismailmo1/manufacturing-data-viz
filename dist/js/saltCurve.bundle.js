"use strict";
(self["webpackChunkmanufacturing_data_viz"] = self["webpackChunkmanufacturing_data_viz"] || []).push([["saltCurve"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/salt-curve/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/salt-curve/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:Arial, Helvetica, sans-serif; \n    max-width: 1080px; \n    padding-top: 20px;\n    margin: 0 auto !important; \n\tfloat: none !important; \n}\n\nh1{\n    display:flex; \n    justify-content:center; \n    padding:10px\n}\n\ninput{\n    margin: 10px;\n}\n\n.grid-container {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns:auto auto;    \n}\n\n.grid-item{\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}", "",{"version":3,"sources":["webpack://./src/salt-curve/style.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;IACxC,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;CAC5B,sBAAsB;AACvB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB;AACJ;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;AACzB","sourcesContent":["body{\n    font-family:Arial, Helvetica, sans-serif; \n    max-width: 1080px; \n    padding-top: 20px;\n    margin: 0 auto !important; \n\tfloat: none !important; \n}\n\nh1{\n    display:flex; \n    justify-content:center; \n    padding:10px\n}\n\ninput{\n    margin: 10px;\n}\n\n.grid-container {\n    margin-top: 20px;\n    display: grid;\n    grid-template-columns:auto auto;    \n}\n\n.grid-item{\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/salt-curve/style.css":
/*!**********************************!*\
  !*** ./src/salt-curve/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/salt-curve/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/salt-curve/scripts/annotations.js":
/*!***********************************************!*\
  !*** ./src/salt-curve/scripts/annotations.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateAnnotations": () => (/* binding */ updateAnnotations)
/* harmony export */ });
/* harmony import */ var _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/saltCurve.json */ "./src/salt-curve/data/saltCurve.json");
/* harmony import */ var _interpolation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interpolation */ "./src/salt-curve/scripts/interpolation.js");
/* harmony import */ var _saltCurveChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saltCurveChart */ "./src/salt-curve/scripts/saltCurveChart.js");




const concentrationVals = _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_0__.concentration;
const viscosityVals = _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_0__.viscosity;

function addInterpolationLine(viscosityValue, label, chart) {
  const conc = (0,_interpolation__WEBPACK_IMPORTED_MODULE_1__.calculateConcentration)(
    viscosityValue,
    viscosityVals,
    concentrationVals
  );
  const annotation = {
    drawTime: "afterDraw",
    type: "line",
    label: {
      enabled: true,
      content: `${label} Concentration`,
      position: "center",
      backgroundColor: "rgba(0, 0,0, 0.5)",
    },
    xMin: conc,
    xMax: conc,
    yMin: 0,
    yMax: viscosityValue,
  };

  chart.options.plugins.annotation.annotations[`${label} Concentration`] =
    annotation;
  chart.update();
}

function addViscosityLine(viscosityValue, label, chart) {
  const annotation = {
    type: "line",
    label: { enabled: true, content: `${label} Viscosity`, position: "start" },
    xMin: 0,
    xMax: _saltCurveChart__WEBPACK_IMPORTED_MODULE_2__.maxXAxis,
    yMin: viscosityValue,
    yMax: viscosityValue,
    backgroundColor: "rgba(255, 99, 132, 0.25)",
  };

  chart.options.plugins.annotation.annotations[`${label} Viscosity`] =
    annotation;
  chart.update();
}

function addConcentrationDifferenceLine(chart) {
  // add annotation line for difference
  const desiredViscosity = desiredViscosityInput.value;
  const currentViscosity = currentViscosityInput.value;
  if (currentViscosity && desiredViscosity) {
    const currentConc =
      chart.options.plugins.annotation.annotations["Current Concentration"]
        .xMax;
    const requiredConc =
      chart.options.plugins.annotation.annotations["Required Concentration"]
        .xMax;

    const diffAnnotation = {
      type: "line",
      label: { enabled: true, content: `diff`, position: "center" },
      xMin: currentConc,
      xMax: requiredConc,
      yMin: 5,
      yMax: 5,
      backgroundColor: "rgba(255, 99, 132, 0.25)",
    };

    chart.options.plugins.annotation.annotations["Concentration Difference"] =
      diffAnnotation;
    chart.update();
    return;
  }
}
function updateAnnotations(viscosity, label, chart) {
  if (viscosity) {
    addInterpolationLine(viscosity, label, chart);
    addViscosityLine(viscosity, label, chart);
    addConcentrationDifferenceLine(chart);
    return;
  }
  // clear up annotations if no viscosity
  chart.options.plugins.annotation.annotations[`${label} Concentration`] = null;
  chart.options.plugins.annotation.annotations[`${label} Viscosity`] = null;

  // remove diff annotation if either required or current vals are missing
  chart.options.plugins.annotation.annotations["Concentration Difference"] =
    null;

  chart.update();
}


/***/ }),

/***/ "./src/salt-curve/scripts/interpolation.js":
/*!*************************************************!*\
  !*** ./src/salt-curve/scripts/interpolation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateConcentration": () => (/* binding */ calculateConcentration)
/* harmony export */ });
function linearInterpolate(yVal, point1, point2) {
  // interpolare x val from y

  const [x1, y1] = point1;
  const [x2, y2] = point2;
  const slope = (y2 - y1) / (x2 - x1);
  // solve for x approximating gradient as linear
  // rearrange slope eqn.
  // i.e. (yVal - y1) / (xVal - x1) == slope

  const xVal = (yVal - y1) / slope + x1;
  return xVal;
}

function findSurroundingValues(datapoint, dataset) {
  // return [higher, lower] values in dataset array either side of datapoint

  // copy array and sort
  const sortedDataset = dataset.slice(0).sort((a, b) => a - b);

  // cant use forEach to return
  for (let i = 0; i < sortedDataset.length; i++) {
    if (sortedDataset[i] >= datapoint) {
      const higherVal = sortedDataset[i];
      const lowerVal = sortedDataset[i - 1];
      return [higherVal, lowerVal];
    }
  }
}

function getSurroundingPoints(yVal, yDataset, xDataset) {
  // get [higherPoint, lowerPoint] surrounding yVal

  // get surrounding yvalues
  const [y2, y1] = findSurroundingValues(yVal, yDataset);
  // get idx of yVals
  const y2Idx = yDataset.indexOf(y2);
  const y1Idx = yDataset.indexOf(y1);
  // find corresponding xVals
  const x1 = xDataset[y1Idx];
  const x2 = xDataset[y2Idx];
  const point1 = [x1, y1];
  const point2 = [x2, y2];
  return [point2, point1];
}

function calculateConcentration(
  viscosity,
  viscosityDataset,
  concentrationDataset
) {
  const [point2, point1] = getSurroundingPoints(
    viscosity,
    viscosityDataset,
    concentrationDataset
  );
  const xVal = linearInterpolate(viscosity, point1, point2);
  return xVal;
}


/***/ }),

/***/ "./src/salt-curve/scripts/main.js":
/*!****************************************!*\
  !*** ./src/salt-curve/scripts/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/saltCurve.json */ "./src/salt-curve/data/saltCurve.json");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.css */ "./src/salt-curve/style.css");
/* harmony import */ var _annotations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./annotations */ "./src/salt-curve/scripts/annotations.js");
/* harmony import */ var _saltCurveChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saltCurveChart */ "./src/salt-curve/scripts/saltCurveChart.js");





_saltCurveChart__WEBPACK_IMPORTED_MODULE_3__.saltCurveChart.update();

const desiredViscosityInput = document.getElementById("desiredViscosityInput");
const currentViscosityInput = document.getElementById("currentViscosityInput");
const viscosityVals = _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_0__.viscosity;
// add input event handlers
desiredViscosityInput.max = Math.max(...viscosityVals);
desiredViscosityInput.min = Math.min(...viscosityVals);
currentViscosityInput.max = Math.max(...viscosityVals);
currentViscosityInput.min = Math.min(...viscosityVals);

desiredViscosityInput.addEventListener("input", (e) => {
  const viscosity = e.target.value;
  (0,_annotations__WEBPACK_IMPORTED_MODULE_2__.updateAnnotations)(viscosity, "Required", _saltCurveChart__WEBPACK_IMPORTED_MODULE_3__.saltCurveChart);
});

currentViscosityInput.addEventListener("input", (e) => {
  const viscosity = e.target.value;
  (0,_annotations__WEBPACK_IMPORTED_MODULE_2__.updateAnnotations)(viscosity, "Current", _saltCurveChart__WEBPACK_IMPORTED_MODULE_3__.saltCurveChart);
});


/***/ }),

/***/ "./src/salt-curve/scripts/saltCurveChart.js":
/*!**************************************************!*\
  !*** ./src/salt-curve/scripts/saltCurveChart.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maxXAxis": () => (/* binding */ maxXAxis),
/* harmony export */   "saltCurveChart": () => (/* binding */ saltCurveChart)
/* harmony export */ });
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js");
/* harmony import */ var _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/saltCurve.json */ "./src/salt-curve/data/saltCurve.json");




chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"].register(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__["default"]);
const saltCurveCtx = document.getElementById("saltCurveChart");

const concentrationVals = _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_2__.concentration;
const viscosityVals = _data_saltCurve_json__WEBPACK_IMPORTED_MODULE_2__.viscosity;
// round to nearest 0.5
const maxXAxis = Math.ceil(Math.max(...concentrationVals) / 0.5) * 0.5;

const saltCurveChart = new chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"](saltCurveCtx, {
  type: "scatter",
  data: {
    labels: concentrationVals,
    datasets: [
      {
        label: "Shampoo A",
        data: viscosityVals,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.5,
        showLine: true,
        cubicInterpolationMode: "monotone",
      },
    ],
  },
  options: {
    // animation: { duration: 1000 },
    plugins: {
      annotation: {
        animations: {
          numbers: {
            properties: [],
            type: "number",
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Concentration",
        },
        max: maxXAxis,
      },
      y: {
        display: true,
        title: {
          display: true,
          text: "Viscosity",
        },
      },
    },
  },
});


/***/ }),

/***/ "./src/salt-curve/data/saltCurve.json":
/*!********************************************!*\
  !*** ./src/salt-curve/data/saltCurve.json ***!
  \********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"concentration":[0,0.2,0.4,0.6,0.9,1.15,1.2,1.4,1.6,1.65,1.9,2.2,2.4,2.6],"viscosity":[0,0.1,0.2,1,7,22,28,35,28,22,7,1,0.2,0.1,0]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_auto_auto_esm_js-node_modules_chartjs-plugin-annotation_dist_ch-e852d4"], () => (__webpack_exec__("./src/salt-curve/scripts/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDMURtRDtBQUM3QjtBQUM0QjtBQUNBOztBQUVsRCxrRUFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQTBCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsK0RBQWlCLHdCQUF3QiwyREFBYztBQUN6RCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxFQUFFLCtEQUFpQix1QkFBdUIsMkRBQWM7QUFDeEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCaUM7QUFDdUI7QUFDTjs7QUFFbkQsOERBQWMsQ0FBQyxpRUFBZ0I7QUFDL0I7O0FBRUEsMEJBQTBCLCtEQUE4QjtBQUN4RCxzQkFBc0IsMkRBQTBCO0FBQ2hEO0FBQ087O0FBRUEsMkJBQTJCLHFEQUFLO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NhbHQtY3VydmUvc3R5bGUuY3NzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2FsdC1jdXJ2ZS9zdHlsZS5jc3M/NjYzYyIsIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NhbHQtY3VydmUvc2NyaXB0cy9hbm5vdGF0aW9ucy5qcyIsIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NhbHQtY3VydmUvc2NyaXB0cy9pbnRlcnBvbGF0aW9uLmpzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2FsdC1jdXJ2ZS9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy9zYWx0LWN1cnZlL3NjcmlwdHMvc2FsdEN1cnZlQ2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7IFxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgXFxuXFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxufVxcblxcbmgxe1xcbiAgICBkaXNwbGF5OmZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBcXG4gICAgcGFkZGluZzoxMHB4XFxufVxcblxcbmlucHV0e1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5ncmlkLWNvbnRhaW5lciB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczphdXRvIGF1dG87ICAgIFxcbn1cXG5cXG4uZ3JpZC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2FsdC1jdXJ2ZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQix5QkFBeUI7Q0FDNUIsc0JBQXNCO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIG1heC13aWR0aDogMTA4MHB4OyBcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IFxcblxcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IFxcbn1cXG5cXG5oMXtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXFxuICAgIHBhZGRpbmc6MTBweFxcbn1cXG5cXG5pbnB1dHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvOyAgICBcXG59XFxuXFxuLmdyaWQtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBzYWx0Q3VydmVEYXRhIGZyb20gXCIuLi9kYXRhL3NhbHRDdXJ2ZS5qc29uXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVDb25jZW50cmF0aW9uIH0gZnJvbSBcIi4vaW50ZXJwb2xhdGlvblwiO1xuaW1wb3J0IHsgbWF4WEF4aXMgfSBmcm9tIFwiLi9zYWx0Q3VydmVDaGFydFwiO1xuXG5jb25zdCBjb25jZW50cmF0aW9uVmFscyA9IHNhbHRDdXJ2ZURhdGFbXCJjb25jZW50cmF0aW9uXCJdO1xuY29uc3QgdmlzY29zaXR5VmFscyA9IHNhbHRDdXJ2ZURhdGFbXCJ2aXNjb3NpdHlcIl07XG5cbmZ1bmN0aW9uIGFkZEludGVycG9sYXRpb25MaW5lKHZpc2Nvc2l0eVZhbHVlLCBsYWJlbCwgY2hhcnQpIHtcbiAgY29uc3QgY29uYyA9IGNhbGN1bGF0ZUNvbmNlbnRyYXRpb24oXG4gICAgdmlzY29zaXR5VmFsdWUsXG4gICAgdmlzY29zaXR5VmFscyxcbiAgICBjb25jZW50cmF0aW9uVmFsc1xuICApO1xuICBjb25zdCBhbm5vdGF0aW9uID0ge1xuICAgIGRyYXdUaW1lOiBcImFmdGVyRHJhd1wiLFxuICAgIHR5cGU6IFwibGluZVwiLFxuICAgIGxhYmVsOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgY29udGVudDogYCR7bGFiZWx9IENvbmNlbnRyYXRpb25gLFxuICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLDAsIDAuNSlcIixcbiAgICB9LFxuICAgIHhNaW46IGNvbmMsXG4gICAgeE1heDogY29uYyxcbiAgICB5TWluOiAwLFxuICAgIHlNYXg6IHZpc2Nvc2l0eVZhbHVlLFxuICB9O1xuXG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW2Ake2xhYmVsfSBDb25jZW50cmF0aW9uYF0gPVxuICAgIGFubm90YXRpb247XG4gIGNoYXJ0LnVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRWaXNjb3NpdHlMaW5lKHZpc2Nvc2l0eVZhbHVlLCBsYWJlbCwgY2hhcnQpIHtcbiAgY29uc3QgYW5ub3RhdGlvbiA9IHtcbiAgICB0eXBlOiBcImxpbmVcIixcbiAgICBsYWJlbDogeyBlbmFibGVkOiB0cnVlLCBjb250ZW50OiBgJHtsYWJlbH0gVmlzY29zaXR5YCwgcG9zaXRpb246IFwic3RhcnRcIiB9LFxuICAgIHhNaW46IDAsXG4gICAgeE1heDogbWF4WEF4aXMsXG4gICAgeU1pbjogdmlzY29zaXR5VmFsdWUsXG4gICAgeU1heDogdmlzY29zaXR5VmFsdWUsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjI1KVwiLFxuICB9O1xuXG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW2Ake2xhYmVsfSBWaXNjb3NpdHlgXSA9XG4gICAgYW5ub3RhdGlvbjtcbiAgY2hhcnQudXBkYXRlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZENvbmNlbnRyYXRpb25EaWZmZXJlbmNlTGluZShjaGFydCkge1xuICAvLyBhZGQgYW5ub3RhdGlvbiBsaW5lIGZvciBkaWZmZXJlbmNlXG4gIGNvbnN0IGRlc2lyZWRWaXNjb3NpdHkgPSBkZXNpcmVkVmlzY29zaXR5SW5wdXQudmFsdWU7XG4gIGNvbnN0IGN1cnJlbnRWaXNjb3NpdHkgPSBjdXJyZW50VmlzY29zaXR5SW5wdXQudmFsdWU7XG4gIGlmIChjdXJyZW50VmlzY29zaXR5ICYmIGRlc2lyZWRWaXNjb3NpdHkpIHtcbiAgICBjb25zdCBjdXJyZW50Q29uYyA9XG4gICAgICBjaGFydC5vcHRpb25zLnBsdWdpbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1tcIkN1cnJlbnQgQ29uY2VudHJhdGlvblwiXVxuICAgICAgICAueE1heDtcbiAgICBjb25zdCByZXF1aXJlZENvbmMgPVxuICAgICAgY2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbXCJSZXF1aXJlZCBDb25jZW50cmF0aW9uXCJdXG4gICAgICAgIC54TWF4O1xuXG4gICAgY29uc3QgZGlmZkFubm90YXRpb24gPSB7XG4gICAgICB0eXBlOiBcImxpbmVcIixcbiAgICAgIGxhYmVsOiB7IGVuYWJsZWQ6IHRydWUsIGNvbnRlbnQ6IGBkaWZmYCwgcG9zaXRpb246IFwiY2VudGVyXCIgfSxcbiAgICAgIHhNaW46IGN1cnJlbnRDb25jLFxuICAgICAgeE1heDogcmVxdWlyZWRDb25jLFxuICAgICAgeU1pbjogNSxcbiAgICAgIHlNYXg6IDUsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsIDk5LCAxMzIsIDAuMjUpXCIsXG4gICAgfTtcblxuICAgIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW1wiQ29uY2VudHJhdGlvbiBEaWZmZXJlbmNlXCJdID1cbiAgICAgIGRpZmZBbm5vdGF0aW9uO1xuICAgIGNoYXJ0LnVwZGF0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFubm90YXRpb25zKHZpc2Nvc2l0eSwgbGFiZWwsIGNoYXJ0KSB7XG4gIGlmICh2aXNjb3NpdHkpIHtcbiAgICBhZGRJbnRlcnBvbGF0aW9uTGluZSh2aXNjb3NpdHksIGxhYmVsLCBjaGFydCk7XG4gICAgYWRkVmlzY29zaXR5TGluZSh2aXNjb3NpdHksIGxhYmVsLCBjaGFydCk7XG4gICAgYWRkQ29uY2VudHJhdGlvbkRpZmZlcmVuY2VMaW5lKGNoYXJ0KTtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gY2xlYXIgdXAgYW5ub3RhdGlvbnMgaWYgbm8gdmlzY29zaXR5XG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW2Ake2xhYmVsfSBDb25jZW50cmF0aW9uYF0gPSBudWxsO1xuICBjaGFydC5vcHRpb25zLnBsdWdpbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1tgJHtsYWJlbH0gVmlzY29zaXR5YF0gPSBudWxsO1xuXG4gIC8vIHJlbW92ZSBkaWZmIGFubm90YXRpb24gaWYgZWl0aGVyIHJlcXVpcmVkIG9yIGN1cnJlbnQgdmFscyBhcmUgbWlzc2luZ1xuICBjaGFydC5vcHRpb25zLnBsdWdpbnMuYW5ub3RhdGlvbi5hbm5vdGF0aW9uc1tcIkNvbmNlbnRyYXRpb24gRGlmZmVyZW5jZVwiXSA9XG4gICAgbnVsbDtcblxuICBjaGFydC51cGRhdGUoKTtcbn1cbiIsImZ1bmN0aW9uIGxpbmVhckludGVycG9sYXRlKHlWYWwsIHBvaW50MSwgcG9pbnQyKSB7XG4gIC8vIGludGVycG9sYXJlIHggdmFsIGZyb20geVxuXG4gIGNvbnN0IFt4MSwgeTFdID0gcG9pbnQxO1xuICBjb25zdCBbeDIsIHkyXSA9IHBvaW50MjtcbiAgY29uc3Qgc2xvcGUgPSAoeTIgLSB5MSkgLyAoeDIgLSB4MSk7XG4gIC8vIHNvbHZlIGZvciB4IGFwcHJveGltYXRpbmcgZ3JhZGllbnQgYXMgbGluZWFyXG4gIC8vIHJlYXJyYW5nZSBzbG9wZSBlcW4uXG4gIC8vIGkuZS4gKHlWYWwgLSB5MSkgLyAoeFZhbCAtIHgxKSA9PSBzbG9wZVxuXG4gIGNvbnN0IHhWYWwgPSAoeVZhbCAtIHkxKSAvIHNsb3BlICsgeDE7XG4gIHJldHVybiB4VmFsO1xufVxuXG5mdW5jdGlvbiBmaW5kU3Vycm91bmRpbmdWYWx1ZXMoZGF0YXBvaW50LCBkYXRhc2V0KSB7XG4gIC8vIHJldHVybiBbaGlnaGVyLCBsb3dlcl0gdmFsdWVzIGluIGRhdGFzZXQgYXJyYXkgZWl0aGVyIHNpZGUgb2YgZGF0YXBvaW50XG5cbiAgLy8gY29weSBhcnJheSBhbmQgc29ydFxuICBjb25zdCBzb3J0ZWREYXRhc2V0ID0gZGF0YXNldC5zbGljZSgwKS5zb3J0KChhLCBiKSA9PiBhIC0gYik7XG5cbiAgLy8gY2FudCB1c2UgZm9yRWFjaCB0byByZXR1cm5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWREYXRhc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZERhdGFzZXRbaV0gPj0gZGF0YXBvaW50KSB7XG4gICAgICBjb25zdCBoaWdoZXJWYWwgPSBzb3J0ZWREYXRhc2V0W2ldO1xuICAgICAgY29uc3QgbG93ZXJWYWwgPSBzb3J0ZWREYXRhc2V0W2kgLSAxXTtcbiAgICAgIHJldHVybiBbaGlnaGVyVmFsLCBsb3dlclZhbF07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN1cnJvdW5kaW5nUG9pbnRzKHlWYWwsIHlEYXRhc2V0LCB4RGF0YXNldCkge1xuICAvLyBnZXQgW2hpZ2hlclBvaW50LCBsb3dlclBvaW50XSBzdXJyb3VuZGluZyB5VmFsXG5cbiAgLy8gZ2V0IHN1cnJvdW5kaW5nIHl2YWx1ZXNcbiAgY29uc3QgW3kyLCB5MV0gPSBmaW5kU3Vycm91bmRpbmdWYWx1ZXMoeVZhbCwgeURhdGFzZXQpO1xuICAvLyBnZXQgaWR4IG9mIHlWYWxzXG4gIGNvbnN0IHkySWR4ID0geURhdGFzZXQuaW5kZXhPZih5Mik7XG4gIGNvbnN0IHkxSWR4ID0geURhdGFzZXQuaW5kZXhPZih5MSk7XG4gIC8vIGZpbmQgY29ycmVzcG9uZGluZyB4VmFsc1xuICBjb25zdCB4MSA9IHhEYXRhc2V0W3kxSWR4XTtcbiAgY29uc3QgeDIgPSB4RGF0YXNldFt5MklkeF07XG4gIGNvbnN0IHBvaW50MSA9IFt4MSwgeTFdO1xuICBjb25zdCBwb2ludDIgPSBbeDIsIHkyXTtcbiAgcmV0dXJuIFtwb2ludDIsIHBvaW50MV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVDb25jZW50cmF0aW9uKFxuICB2aXNjb3NpdHksXG4gIHZpc2Nvc2l0eURhdGFzZXQsXG4gIGNvbmNlbnRyYXRpb25EYXRhc2V0XG4pIHtcbiAgY29uc3QgW3BvaW50MiwgcG9pbnQxXSA9IGdldFN1cnJvdW5kaW5nUG9pbnRzKFxuICAgIHZpc2Nvc2l0eSxcbiAgICB2aXNjb3NpdHlEYXRhc2V0LFxuICAgIGNvbmNlbnRyYXRpb25EYXRhc2V0XG4gICk7XG4gIGNvbnN0IHhWYWwgPSBsaW5lYXJJbnRlcnBvbGF0ZSh2aXNjb3NpdHksIHBvaW50MSwgcG9pbnQyKTtcbiAgcmV0dXJuIHhWYWw7XG59XG4iLCJpbXBvcnQgc2FsdEN1cnZlRGF0YSBmcm9tIFwiLi4vZGF0YS9zYWx0Q3VydmUuanNvblwiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyB1cGRhdGVBbm5vdGF0aW9ucyB9IGZyb20gXCIuL2Fubm90YXRpb25zXCI7XG5pbXBvcnQgeyBzYWx0Q3VydmVDaGFydCB9IGZyb20gXCIuL3NhbHRDdXJ2ZUNoYXJ0XCI7XG5cbnNhbHRDdXJ2ZUNoYXJ0LnVwZGF0ZSgpO1xuXG5jb25zdCBkZXNpcmVkVmlzY29zaXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2lyZWRWaXNjb3NpdHlJbnB1dFwiKTtcbmNvbnN0IGN1cnJlbnRWaXNjb3NpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudFZpc2Nvc2l0eUlucHV0XCIpO1xuY29uc3QgdmlzY29zaXR5VmFscyA9IHNhbHRDdXJ2ZURhdGFbXCJ2aXNjb3NpdHlcIl07XG4vLyBhZGQgaW5wdXQgZXZlbnQgaGFuZGxlcnNcbmRlc2lyZWRWaXNjb3NpdHlJbnB1dC5tYXggPSBNYXRoLm1heCguLi52aXNjb3NpdHlWYWxzKTtcbmRlc2lyZWRWaXNjb3NpdHlJbnB1dC5taW4gPSBNYXRoLm1pbiguLi52aXNjb3NpdHlWYWxzKTtcbmN1cnJlbnRWaXNjb3NpdHlJbnB1dC5tYXggPSBNYXRoLm1heCguLi52aXNjb3NpdHlWYWxzKTtcbmN1cnJlbnRWaXNjb3NpdHlJbnB1dC5taW4gPSBNYXRoLm1pbiguLi52aXNjb3NpdHlWYWxzKTtcblxuZGVzaXJlZFZpc2Nvc2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICBjb25zdCB2aXNjb3NpdHkgPSBlLnRhcmdldC52YWx1ZTtcbiAgdXBkYXRlQW5ub3RhdGlvbnModmlzY29zaXR5LCBcIlJlcXVpcmVkXCIsIHNhbHRDdXJ2ZUNoYXJ0KTtcbn0pO1xuXG5jdXJyZW50VmlzY29zaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gIGNvbnN0IHZpc2Nvc2l0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICB1cGRhdGVBbm5vdGF0aW9ucyh2aXNjb3NpdHksIFwiQ3VycmVudFwiLCBzYWx0Q3VydmVDaGFydCk7XG59KTtcbiIsImltcG9ydCBDaGFydCBmcm9tIFwiY2hhcnQuanMvYXV0b1wiO1xuaW1wb3J0IGFubm90YXRpb25QbHVnaW4gZnJvbSBcImNoYXJ0anMtcGx1Z2luLWFubm90YXRpb25cIjtcbmltcG9ydCBzYWx0Q3VydmVEYXRhIGZyb20gXCIuLi9kYXRhL3NhbHRDdXJ2ZS5qc29uXCI7XG5cbkNoYXJ0LnJlZ2lzdGVyKGFubm90YXRpb25QbHVnaW4pO1xuY29uc3Qgc2FsdEN1cnZlQ3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWx0Q3VydmVDaGFydFwiKTtcblxuY29uc3QgY29uY2VudHJhdGlvblZhbHMgPSBzYWx0Q3VydmVEYXRhW1wiY29uY2VudHJhdGlvblwiXTtcbmNvbnN0IHZpc2Nvc2l0eVZhbHMgPSBzYWx0Q3VydmVEYXRhW1widmlzY29zaXR5XCJdO1xuLy8gcm91bmQgdG8gbmVhcmVzdCAwLjVcbmV4cG9ydCBjb25zdCBtYXhYQXhpcyA9IE1hdGguY2VpbChNYXRoLm1heCguLi5jb25jZW50cmF0aW9uVmFscykgLyAwLjUpICogMC41O1xuXG5leHBvcnQgY29uc3Qgc2FsdEN1cnZlQ2hhcnQgPSBuZXcgQ2hhcnQoc2FsdEN1cnZlQ3R4LCB7XG4gIHR5cGU6IFwic2NhdHRlclwiLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBjb25jZW50cmF0aW9uVmFscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTaGFtcG9vIEFcIixcbiAgICAgICAgZGF0YTogdmlzY29zaXR5VmFscyxcbiAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig3NSwgMTkyLCAxOTIpXCIsXG4gICAgICAgIHRlbnNpb246IDAuNSxcbiAgICAgICAgc2hvd0xpbmU6IHRydWUsXG4gICAgICAgIGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6IFwibW9ub3RvbmVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIC8vIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGFubm90YXRpb246IHtcbiAgICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICAgIG51bWJlcnM6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtdLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeDoge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdGV4dDogXCJDb25jZW50cmF0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1heDogbWF4WEF4aXMsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdGV4dDogXCJWaXNjb3NpdHlcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9