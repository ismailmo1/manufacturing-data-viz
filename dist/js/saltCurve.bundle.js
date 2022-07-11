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

/***/ "./src/salt-curve/script.js":
/*!**********************************!*\
  !*** ./src/salt-curve/script.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js/auto */ "./node_modules/chart.js/auto/auto.esm.js");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "./node_modules/chartjs-plugin-annotation/dist/chartjs-plugin-annotation.esm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/salt-curve/style.css");




chart_js_auto__WEBPACK_IMPORTED_MODULE_0__["default"].register(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__["default"]);

const saltCurveCtx = document.getElementById("saltCurveChart");
const desiredViscosityInput = document.getElementById("desiredViscosityInput");
const currentViscosityInput = document.getElementById("currentViscosityInput");

const concentrationVals = [
  0, 0.2, 0.4, 0.6, 0.9, 1.15, 1.2, 1.4, 1.6, 1.65, 1.9, 2.2, 2.4, 2.6,
];
const viscosityVals = [
  0, 0.1, 0.2, 1.0, 7, 22, 28, 35, 28, 22, 7, 1.0, 0.2, 0.1, 0,
];

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

function addInterpolationLine(viscosityValue, label, chart) {
  const conc = calculateConcentration(
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
    xMax: maxXAxis,
    yMin: viscosityValue,
    yMax: viscosityValue,
    backgroundColor: "rgba(255, 99, 132, 0.25)",
  };

  chart.options.plugins.annotation.annotations[`${label} Viscosity`] =
    annotation;
  chart.update();
}

// add input event handlers
desiredViscosityInput.max = Math.max(...viscosityVals);
desiredViscosityInput.min = Math.min(...viscosityVals);
currentViscosityInput.max = Math.max(...viscosityVals);
currentViscosityInput.min = Math.min(...viscosityVals);

desiredViscosityInput.addEventListener("input", (e) => {
  const viscosity = e.target.value;
  updateAnnotations(viscosity, "Required", saltCurveChart);
});

currentViscosityInput.addEventListener("input", (e) => {
  const viscosity = e.target.value;
  updateAnnotations(viscosity, "Current", saltCurveChart);
});

function calculateConcentrationDifference() {
  // add annotation line for difference
  const desiredViscosity = desiredViscosityInput.value;
  const currentViscosity = currentViscosityInput.value;
  if (currentViscosity && desiredViscosity) {
    const currentConc =
      saltCurveChart.options.plugins.annotation.annotations[
        "Current Concentration"
      ].xMax;
    const requiredConc =
      saltCurveChart.options.plugins.annotation.annotations[
        "Required Concentration"
      ].xMax;

    const diffAnnotation = {
      type: "line",
      label: { enabled: true, content: `diff`, position: "center" },
      xMin: currentConc,
      xMax: requiredConc,
      yMin: 5,
      yMax: 5,
      backgroundColor: "rgba(255, 99, 132, 0.25)",
    };

    saltCurveChart.options.plugins.annotation.annotations[
      "Concentration Difference"
    ] = diffAnnotation;
    saltCurveChart.update();
    return;
  }
}
function updateAnnotations(viscosity, label, chart) {
  if (viscosity) {
    addInterpolationLine(viscosity, label, chart);
    addViscosityLine(viscosity, label, chart);
    calculateConcentrationDifference();
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_chart_js_auto_auto_esm_js-node_modules_chartjs-plugin-annotation_dist_ch-e852d4"], () => (__webpack_exec__("./src/salt-curve/script.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkJBQTJCLE9BQU8sK0JBQStCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0QsT0FBTztBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsb0RBQW9EO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsT0FBTztBQUN6RCxrREFBa0QsT0FBTzs7QUFFekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NhbHQtY3VydmUvc3R5bGUuY3NzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvc2FsdC1jdXJ2ZS9zdHlsZS5jc3M/NjYzYyIsIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3NhbHQtY3VydmUvc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgXFxuICAgIG1heC13aWR0aDogMTA4MHB4OyBcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7IFxcblxcdGZsb2F0OiBub25lICFpbXBvcnRhbnQ7IFxcbn1cXG5cXG5oMXtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXFxuICAgIHBhZGRpbmc6MTBweFxcbn1cXG5cXG5pbnB1dHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZ3JpZC1jb250YWluZXIge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6YXV0byBhdXRvOyAgICBcXG59XFxuXFxuLmdyaWQtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3NhbHQtY3VydmUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIseUJBQXlCO0NBQzVCLHNCQUFzQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IFxcbiAgICBtYXgtd2lkdGg6IDEwODBweDsgXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50OyBcXG5cXHRmbG9hdDogbm9uZSAhaW1wb3J0YW50OyBcXG59XFxuXFxuaDF7XFxuICAgIGRpc3BsYXk6ZmxleDsgXFxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7IFxcbiAgICBwYWRkaW5nOjEwcHhcXG59XFxuXFxuaW5wdXR7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmdyaWQtY29udGFpbmVyIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOmF1dG8gYXV0bzsgICAgXFxufVxcblxcbi5ncmlkLWl0ZW17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJpbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzL2F1dG9cIjtcbmltcG9ydCBhbm5vdGF0aW9uUGx1Z2luIGZyb20gXCJjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5DaGFydC5yZWdpc3Rlcihhbm5vdGF0aW9uUGx1Z2luKTtcblxuY29uc3Qgc2FsdEN1cnZlQ3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWx0Q3VydmVDaGFydFwiKTtcbmNvbnN0IGRlc2lyZWRWaXNjb3NpdHlJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzaXJlZFZpc2Nvc2l0eUlucHV0XCIpO1xuY29uc3QgY3VycmVudFZpc2Nvc2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50VmlzY29zaXR5SW5wdXRcIik7XG5cbmNvbnN0IGNvbmNlbnRyYXRpb25WYWxzID0gW1xuICAwLCAwLjIsIDAuNCwgMC42LCAwLjksIDEuMTUsIDEuMiwgMS40LCAxLjYsIDEuNjUsIDEuOSwgMi4yLCAyLjQsIDIuNixcbl07XG5jb25zdCB2aXNjb3NpdHlWYWxzID0gW1xuICAwLCAwLjEsIDAuMiwgMS4wLCA3LCAyMiwgMjgsIDM1LCAyOCwgMjIsIDcsIDEuMCwgMC4yLCAwLjEsIDAsXG5dO1xuXG4vLyByb3VuZCB0byBuZWFyZXN0IDAuNVxuY29uc3QgbWF4WEF4aXMgPSBNYXRoLmNlaWwoTWF0aC5tYXgoLi4uY29uY2VudHJhdGlvblZhbHMpIC8gMC41KSAqIDAuNTtcblxuY29uc3Qgc2FsdEN1cnZlQ2hhcnQgPSBuZXcgQ2hhcnQoc2FsdEN1cnZlQ3R4LCB7XG4gIHR5cGU6IFwic2NhdHRlclwiLFxuICBkYXRhOiB7XG4gICAgbGFiZWxzOiBjb25jZW50cmF0aW9uVmFscyxcbiAgICBkYXRhc2V0czogW1xuICAgICAge1xuICAgICAgICBsYWJlbDogXCJTaGFtcG9vIEFcIixcbiAgICAgICAgZGF0YTogdmlzY29zaXR5VmFscyxcbiAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInJnYig3NSwgMTkyLCAxOTIpXCIsXG4gICAgICAgIHRlbnNpb246IDAuNSxcbiAgICAgICAgc2hvd0xpbmU6IHRydWUsXG4gICAgICAgIGN1YmljSW50ZXJwb2xhdGlvbk1vZGU6IFwibW9ub3RvbmVcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIC8vIGFuaW1hdGlvbjogeyBkdXJhdGlvbjogMTAwMCB9LFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIGFubm90YXRpb246IHtcbiAgICAgICAgYW5pbWF0aW9uczoge1xuICAgICAgICAgIG51bWJlcnM6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtdLFxuICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNjYWxlczoge1xuICAgICAgeDoge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdGV4dDogXCJDb25jZW50cmF0aW9uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG1heDogbWF4WEF4aXMsXG4gICAgICB9LFxuICAgICAgeToge1xuICAgICAgICBkaXNwbGF5OiB0cnVlLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgICAgdGV4dDogXCJWaXNjb3NpdHlcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBsaW5lYXJJbnRlcnBvbGF0ZSh5VmFsLCBwb2ludDEsIHBvaW50Mikge1xuICAvLyBpbnRlcnBvbGFyZSB4IHZhbCBmcm9tIHlcblxuICBjb25zdCBbeDEsIHkxXSA9IHBvaW50MTtcbiAgY29uc3QgW3gyLCB5Ml0gPSBwb2ludDI7XG4gIGNvbnN0IHNsb3BlID0gKHkyIC0geTEpIC8gKHgyIC0geDEpO1xuICAvLyBzb2x2ZSBmb3IgeCBhcHByb3hpbWF0aW5nIGdyYWRpZW50IGFzIGxpbmVhclxuICAvLyByZWFycmFuZ2Ugc2xvcGUgZXFuLlxuICAvLyBpLmUuICh5VmFsIC0geTEpIC8gKHhWYWwgLSB4MSkgPT0gc2xvcGVcblxuICBjb25zdCB4VmFsID0gKHlWYWwgLSB5MSkgLyBzbG9wZSArIHgxO1xuICByZXR1cm4geFZhbDtcbn1cblxuZnVuY3Rpb24gZmluZFN1cnJvdW5kaW5nVmFsdWVzKGRhdGFwb2ludCwgZGF0YXNldCkge1xuICAvLyByZXR1cm4gW2hpZ2hlciwgbG93ZXJdIHZhbHVlcyBpbiBkYXRhc2V0IGFycmF5IGVpdGhlciBzaWRlIG9mIGRhdGFwb2ludFxuXG4gIC8vIGNvcHkgYXJyYXkgYW5kIHNvcnRcbiAgY29uc3Qgc29ydGVkRGF0YXNldCA9IGRhdGFzZXQuc2xpY2UoMCkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuXG4gIC8vIGNhbnQgdXNlIGZvckVhY2ggdG8gcmV0dXJuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkRGF0YXNldC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzb3J0ZWREYXRhc2V0W2ldID49IGRhdGFwb2ludCkge1xuICAgICAgY29uc3QgaGlnaGVyVmFsID0gc29ydGVkRGF0YXNldFtpXTtcbiAgICAgIGNvbnN0IGxvd2VyVmFsID0gc29ydGVkRGF0YXNldFtpIC0gMV07XG4gICAgICByZXR1cm4gW2hpZ2hlclZhbCwgbG93ZXJWYWxdO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTdXJyb3VuZGluZ1BvaW50cyh5VmFsLCB5RGF0YXNldCwgeERhdGFzZXQpIHtcbiAgLy8gZ2V0IFtoaWdoZXJQb2ludCwgbG93ZXJQb2ludF0gc3Vycm91bmRpbmcgeVZhbFxuXG4gIC8vIGdldCBzdXJyb3VuZGluZyB5dmFsdWVzXG4gIGNvbnN0IFt5MiwgeTFdID0gZmluZFN1cnJvdW5kaW5nVmFsdWVzKHlWYWwsIHlEYXRhc2V0KTtcbiAgLy8gZ2V0IGlkeCBvZiB5VmFsc1xuICBjb25zdCB5MklkeCA9IHlEYXRhc2V0LmluZGV4T2YoeTIpO1xuICBjb25zdCB5MUlkeCA9IHlEYXRhc2V0LmluZGV4T2YoeTEpO1xuICAvLyBmaW5kIGNvcnJlc3BvbmRpbmcgeFZhbHNcbiAgY29uc3QgeDEgPSB4RGF0YXNldFt5MUlkeF07XG4gIGNvbnN0IHgyID0geERhdGFzZXRbeTJJZHhdO1xuICBjb25zdCBwb2ludDEgPSBbeDEsIHkxXTtcbiAgY29uc3QgcG9pbnQyID0gW3gyLCB5Ml07XG4gIHJldHVybiBbcG9pbnQyLCBwb2ludDFdO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb25jZW50cmF0aW9uKFxuICB2aXNjb3NpdHksXG4gIHZpc2Nvc2l0eURhdGFzZXQsXG4gIGNvbmNlbnRyYXRpb25EYXRhc2V0XG4pIHtcbiAgY29uc3QgW3BvaW50MiwgcG9pbnQxXSA9IGdldFN1cnJvdW5kaW5nUG9pbnRzKFxuICAgIHZpc2Nvc2l0eSxcbiAgICB2aXNjb3NpdHlEYXRhc2V0LFxuICAgIGNvbmNlbnRyYXRpb25EYXRhc2V0XG4gICk7XG4gIGNvbnN0IHhWYWwgPSBsaW5lYXJJbnRlcnBvbGF0ZSh2aXNjb3NpdHksIHBvaW50MSwgcG9pbnQyKTtcbiAgcmV0dXJuIHhWYWw7XG59XG5cbmZ1bmN0aW9uIGFkZEludGVycG9sYXRpb25MaW5lKHZpc2Nvc2l0eVZhbHVlLCBsYWJlbCwgY2hhcnQpIHtcbiAgY29uc3QgY29uYyA9IGNhbGN1bGF0ZUNvbmNlbnRyYXRpb24oXG4gICAgdmlzY29zaXR5VmFsdWUsXG4gICAgdmlzY29zaXR5VmFscyxcbiAgICBjb25jZW50cmF0aW9uVmFsc1xuICApO1xuICBjb25zdCBhbm5vdGF0aW9uID0ge1xuICAgIGRyYXdUaW1lOiBcImFmdGVyRHJhd1wiLFxuICAgIHR5cGU6IFwibGluZVwiLFxuICAgIGxhYmVsOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgY29udGVudDogYCR7bGFiZWx9IENvbmNlbnRyYXRpb25gLFxuICAgICAgcG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgwLCAwLDAsIDAuNSlcIixcbiAgICB9LFxuICAgIHhNaW46IGNvbmMsXG4gICAgeE1heDogY29uYyxcbiAgICB5TWluOiAwLFxuICAgIHlNYXg6IHZpc2Nvc2l0eVZhbHVlLFxuICB9O1xuXG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW2Ake2xhYmVsfSBDb25jZW50cmF0aW9uYF0gPVxuICAgIGFubm90YXRpb247XG4gIGNoYXJ0LnVwZGF0ZSgpO1xufVxuXG5mdW5jdGlvbiBhZGRWaXNjb3NpdHlMaW5lKHZpc2Nvc2l0eVZhbHVlLCBsYWJlbCwgY2hhcnQpIHtcbiAgY29uc3QgYW5ub3RhdGlvbiA9IHtcbiAgICB0eXBlOiBcImxpbmVcIixcbiAgICBsYWJlbDogeyBlbmFibGVkOiB0cnVlLCBjb250ZW50OiBgJHtsYWJlbH0gVmlzY29zaXR5YCwgcG9zaXRpb246IFwic3RhcnRcIiB9LFxuICAgIHhNaW46IDAsXG4gICAgeE1heDogbWF4WEF4aXMsXG4gICAgeU1pbjogdmlzY29zaXR5VmFsdWUsXG4gICAgeU1heDogdmlzY29zaXR5VmFsdWUsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LCA5OSwgMTMyLCAwLjI1KVwiLFxuICB9O1xuXG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW2Ake2xhYmVsfSBWaXNjb3NpdHlgXSA9XG4gICAgYW5ub3RhdGlvbjtcbiAgY2hhcnQudXBkYXRlKCk7XG59XG5cbi8vIGFkZCBpbnB1dCBldmVudCBoYW5kbGVyc1xuZGVzaXJlZFZpc2Nvc2l0eUlucHV0Lm1heCA9IE1hdGgubWF4KC4uLnZpc2Nvc2l0eVZhbHMpO1xuZGVzaXJlZFZpc2Nvc2l0eUlucHV0Lm1pbiA9IE1hdGgubWluKC4uLnZpc2Nvc2l0eVZhbHMpO1xuY3VycmVudFZpc2Nvc2l0eUlucHV0Lm1heCA9IE1hdGgubWF4KC4uLnZpc2Nvc2l0eVZhbHMpO1xuY3VycmVudFZpc2Nvc2l0eUlucHV0Lm1pbiA9IE1hdGgubWluKC4uLnZpc2Nvc2l0eVZhbHMpO1xuXG5kZXNpcmVkVmlzY29zaXR5SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gIGNvbnN0IHZpc2Nvc2l0eSA9IGUudGFyZ2V0LnZhbHVlO1xuICB1cGRhdGVBbm5vdGF0aW9ucyh2aXNjb3NpdHksIFwiUmVxdWlyZWRcIiwgc2FsdEN1cnZlQ2hhcnQpO1xufSk7XG5cbmN1cnJlbnRWaXNjb3NpdHlJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgY29uc3QgdmlzY29zaXR5ID0gZS50YXJnZXQudmFsdWU7XG4gIHVwZGF0ZUFubm90YXRpb25zKHZpc2Nvc2l0eSwgXCJDdXJyZW50XCIsIHNhbHRDdXJ2ZUNoYXJ0KTtcbn0pO1xuXG5mdW5jdGlvbiBjYWxjdWxhdGVDb25jZW50cmF0aW9uRGlmZmVyZW5jZSgpIHtcbiAgLy8gYWRkIGFubm90YXRpb24gbGluZSBmb3IgZGlmZmVyZW5jZVxuICBjb25zdCBkZXNpcmVkVmlzY29zaXR5ID0gZGVzaXJlZFZpc2Nvc2l0eUlucHV0LnZhbHVlO1xuICBjb25zdCBjdXJyZW50VmlzY29zaXR5ID0gY3VycmVudFZpc2Nvc2l0eUlucHV0LnZhbHVlO1xuICBpZiAoY3VycmVudFZpc2Nvc2l0eSAmJiBkZXNpcmVkVmlzY29zaXR5KSB7XG4gICAgY29uc3QgY3VycmVudENvbmMgPVxuICAgICAgc2FsdEN1cnZlQ2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbXG4gICAgICAgIFwiQ3VycmVudCBDb25jZW50cmF0aW9uXCJcbiAgICAgIF0ueE1heDtcbiAgICBjb25zdCByZXF1aXJlZENvbmMgPVxuICAgICAgc2FsdEN1cnZlQ2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbXG4gICAgICAgIFwiUmVxdWlyZWQgQ29uY2VudHJhdGlvblwiXG4gICAgICBdLnhNYXg7XG5cbiAgICBjb25zdCBkaWZmQW5ub3RhdGlvbiA9IHtcbiAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgbGFiZWw6IHsgZW5hYmxlZDogdHJ1ZSwgY29udGVudDogYGRpZmZgLCBwb3NpdGlvbjogXCJjZW50ZXJcIiB9LFxuICAgICAgeE1pbjogY3VycmVudENvbmMsXG4gICAgICB4TWF4OiByZXF1aXJlZENvbmMsXG4gICAgICB5TWluOiA1LFxuICAgICAgeU1heDogNSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwgOTksIDEzMiwgMC4yNSlcIixcbiAgICB9O1xuXG4gICAgc2FsdEN1cnZlQ2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbXG4gICAgICBcIkNvbmNlbnRyYXRpb24gRGlmZmVyZW5jZVwiXG4gICAgXSA9IGRpZmZBbm5vdGF0aW9uO1xuICAgIHNhbHRDdXJ2ZUNoYXJ0LnVwZGF0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbnModmlzY29zaXR5LCBsYWJlbCwgY2hhcnQpIHtcbiAgaWYgKHZpc2Nvc2l0eSkge1xuICAgIGFkZEludGVycG9sYXRpb25MaW5lKHZpc2Nvc2l0eSwgbGFiZWwsIGNoYXJ0KTtcbiAgICBhZGRWaXNjb3NpdHlMaW5lKHZpc2Nvc2l0eSwgbGFiZWwsIGNoYXJ0KTtcbiAgICBjYWxjdWxhdGVDb25jZW50cmF0aW9uRGlmZmVyZW5jZSgpO1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBjbGVhciB1cCBhbm5vdGF0aW9ucyBpZiBubyB2aXNjb3NpdHlcbiAgY2hhcnQub3B0aW9ucy5wbHVnaW5zLmFubm90YXRpb24uYW5ub3RhdGlvbnNbYCR7bGFiZWx9IENvbmNlbnRyYXRpb25gXSA9IG51bGw7XG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW2Ake2xhYmVsfSBWaXNjb3NpdHlgXSA9IG51bGw7XG5cbiAgLy8gcmVtb3ZlIGRpZmYgYW5ub3RhdGlvbiBpZiBlaXRoZXIgcmVxdWlyZWQgb3IgY3VycmVudCB2YWxzIGFyZSBtaXNzaW5nXG4gIGNoYXJ0Lm9wdGlvbnMucGx1Z2lucy5hbm5vdGF0aW9uLmFubm90YXRpb25zW1wiQ29uY2VudHJhdGlvbiBEaWZmZXJlbmNlXCJdID1cbiAgICBudWxsO1xuXG4gIGNoYXJ0LnVwZGF0ZSgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9