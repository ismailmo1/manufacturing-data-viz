"use strict";
(self["webpackChunkmanufacturing_data_viz"] = self["webpackChunkmanufacturing_data_viz"] || []).push([["traceability"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/traceability/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/traceability/style.css ***!
  \**************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    font-family:Arial, Helvetica, sans-serif; \n    max-width: 1080px; \n    padding-top: 20px;\n    margin: 0 auto !important; \n\tfloat: none !important; \n}\n\nh1, #tree{\n    display:flex; \n    justify-content:center; \n    padding:10px\n}\n\n#productDetails{\n    padding: 10px;;\n}\n\n.node {\n    cursor: pointer;\n}\n\n.node circle:hover{\n    stroke-width: 5px;\n}\n\n.node circle {\n    fill: #fff;\n    stroke: steelblue;\n    stroke-width: 3px;\n}\n\n.node text {\n    font: 12px sans-serif;\n}\n\n.link {\n    fill: none;\n    stroke: #ccc;\n    stroke-width: 2px;\n    cursor: pointer;\n}\n\n\n.link:hover{\n    stroke-width: 5px;\n    stroke: rgb(0, 0, 0);\n}\n\n.tooltip{\n    background-color: white;\n    border: solid;\n    border-color: #ccc;\n    border-width: 1px;\n    border-radius: 5px;\n    padding: 5px;\n    font: 12px sans-serif;\n\n}", "",{"version":3,"sources":["webpack://./src/traceability/style.css"],"names":[],"mappings":"AAAA;IACI,wCAAwC;IACxC,iBAAiB;IACjB,iBAAiB;IACjB,yBAAyB;CAC5B,sBAAsB;AACvB;;AAEA;IACI,YAAY;IACZ,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,iBAAiB;IACjB,eAAe;AACnB;;;AAGA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;;AAEzB","sourcesContent":["body{\n    font-family:Arial, Helvetica, sans-serif; \n    max-width: 1080px; \n    padding-top: 20px;\n    margin: 0 auto !important; \n\tfloat: none !important; \n}\n\nh1, #tree{\n    display:flex; \n    justify-content:center; \n    padding:10px\n}\n\n#productDetails{\n    padding: 10px;;\n}\n\n.node {\n    cursor: pointer;\n}\n\n.node circle:hover{\n    stroke-width: 5px;\n}\n\n.node circle {\n    fill: #fff;\n    stroke: steelblue;\n    stroke-width: 3px;\n}\n\n.node text {\n    font: 12px sans-serif;\n}\n\n.link {\n    fill: none;\n    stroke: #ccc;\n    stroke-width: 2px;\n    cursor: pointer;\n}\n\n\n.link:hover{\n    stroke-width: 5px;\n    stroke: rgb(0, 0, 0);\n}\n\n.tooltip{\n    background-color: white;\n    border: solid;\n    border-color: #ccc;\n    border-width: 1px;\n    border-radius: 5px;\n    padding: 5px;\n    font: 12px sans-serif;\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/traceability/style.css":
/*!************************************!*\
  !*** ./src/traceability/style.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/traceability/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/traceability/scripts/initialiseTree.js":
/*!****************************************************!*\
  !*** ./src/traceability/scripts/initialiseTree.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "root": () => (/* binding */ root),
/* harmony export */   "svg": () => (/* binding */ svg),
/* harmony export */   "tooltip": () => (/* binding */ tooltip),
/* harmony export */   "treemap": () => (/* binding */ treemap)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
/* harmony import */ var _data_treeData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/treeData.json */ "./src/traceability/scripts/data/treeData.json");



// modified from https://bl.ocks.org/d3noob/8375092
// Set the dimensions and margins of the diagram
const margin = {
  top: 20,
  right: 90,
  bottom: 30,
  left: 90,
};
const width = 960 - margin.left - margin.right;
const height = 500 - margin.top - margin.bottom;

// declares a tree layout and assigns the size
const treemap = d3__WEBPACK_IMPORTED_MODULE_0__.tree().size([height, width]);
// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
const svg = d3__WEBPACK_IMPORTED_MODULE_0__.select("#tree")
  .append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// create a tooltip
const tooltip = d3__WEBPACK_IMPORTED_MODULE_0__.select("#tree")
  .append("div")
  .attr("class", "tooltip")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .text("I'm a tooltip!");

// Assigns parent, children, height, depth
const root = d3__WEBPACK_IMPORTED_MODULE_0__.hierarchy(_data_treeData_json__WEBPACK_IMPORTED_MODULE_1__, function (d) {
  return d.children;
});
root.x0 = height / 2;
root.y0 = 0;


/***/ }),

/***/ "./src/traceability/scripts/main.js":
/*!******************************************!*\
  !*** ./src/traceability/scripts/main.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/traceability/style.css");
/* harmony import */ var _initialiseTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialiseTree */ "./src/traceability/scripts/initialiseTree.js");
/* harmony import */ var _updateTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTree */ "./src/traceability/scripts/updateTree.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/traceability/scripts/utils.js");





const productDetailView = {};
productDetailView.name = document.getElementById("productName");
productDetailView.lotNumber = document.getElementById("lotNumber");

// Collapse after the second level
_initialiseTree__WEBPACK_IMPORTED_MODULE_1__.root.children.forEach(_utils__WEBPACK_IMPORTED_MODULE_3__.collapse);

//HACK tree is implictly initialised by importing treemap, svg and root
// can define intialise function to return these, but these values need to be passed around
// can initialise with undefined and then assign values in initialise function?
(0,_updateTree__WEBPACK_IMPORTED_MODULE_2__.update)(_initialiseTree__WEBPACK_IMPORTED_MODULE_1__.root, _initialiseTree__WEBPACK_IMPORTED_MODULE_1__.treemap, _initialiseTree__WEBPACK_IMPORTED_MODULE_1__.svg);

//TODO add where used functionality
// e.g. when you click on a raw material it shows graph of where raw material is used


/***/ }),

/***/ "./src/traceability/scripts/updateTree.js":
/*!************************************************!*\
  !*** ./src/traceability/scripts/updateTree.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "update": () => (/* binding */ update)
/* harmony export */ });
/* harmony import */ var _initialiseTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialiseTree */ "./src/traceability/scripts/initialiseTree.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/traceability/scripts/utils.js");



let nodeId = 0;
const duration = 750;

function update(source) {
  // Assigns the x and y position for the nodes
  const treeData = (0,_initialiseTree__WEBPACK_IMPORTED_MODULE_0__.treemap)(_initialiseTree__WEBPACK_IMPORTED_MODULE_0__.root);

  // Compute the new tree layout.
  const nodes = treeData.descendants(),
    links = treeData.descendants().slice(1);

  // Normalize for fixed-depth.
  nodes.forEach(function (d) {
    // move nodes to horizontal locations based on tree depth
    // i.e. i.e. at tree level (TL) 0 : y=0, TL 1:y=180, TL2: y=360 ...
    d.y = d.depth * 180;
  });

  // ****************** Nodes section ***************************

  // Update the nodes...
  const node = _initialiseTree__WEBPACK_IMPORTED_MODULE_0__.svg.selectAll("g.node").data(nodes, function (d) {
    return d.id || (d.id = ++nodeId);
  });

  // Enter any new nodes at the parent's previous position.
  const nodeEnter = node
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", function (d) {
      return "translate(" + source.y0 + "," + source.x0 + ")";
    });
  nodeEnter.on("click", _utils__WEBPACK_IMPORTED_MODULE_1__.click);

  // Add Circle for the nodes
  nodeEnter
    .append("circle")
    .attr("class", "node")
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  // Add labels for the nodes
  nodeEnter
    .append("text")
    .attr("dy", "-0.5em")
    .attr("x", function (d) {
      return d.children || d._children ? -13 : 13;
    })
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start";
    })
    .text(function (d) {
      return d.data.name;
    });

  // UPDATE
  const nodeUpdate = nodeEnter.merge(node);

  // Transition to the proper position for the node
  nodeUpdate
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + d.y + "," + d.x + ")";
    });

  // Update the node attributes and style
  nodeUpdate
    .select("circle.node")
    .attr("r", 10)
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#fff";
    })
    .attr("cursor", "pointer");

  // Remove any exiting nodes
  const nodeExit = node
    .exit()
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + source.y + "," + source.x + ")";
    })
    .remove();

  // On exit reduce the node circles size to 0
  nodeExit.select("circle").attr("r", 1e-6);

  // On exit reduce the opacity of text labels
  nodeExit.select("text").style("fill-opacity", 1e-6);

  // ****************** links section ***************************

  // Update the links...
  const link = _initialiseTree__WEBPACK_IMPORTED_MODULE_0__.svg.selectAll("path.link").data(links, function (d) {
    return d.id;
  });

  // Enter any new links at the parent's previous position.
  const linkEnter = link
    .enter()
    .insert("path", "g")
    .attr("class", "link")
    .attr("d", function (d) {
      const o = {
        x: source.x0,
        y: source.y0,
      };
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.diagonal)(o, o);
    });

  linkEnter.on("mouseover", (e, l) => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.linkHoverHandler)(e, l));
  linkEnter.on("mouseout", (e, l) => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.linkHoverHandler)(e, l));
  linkEnter.on("mousemove", (e, l) => (0,_utils__WEBPACK_IMPORTED_MODULE_1__.linkHoverHandler)(e, l));

  // UPDATE
  const linkUpdate = linkEnter.merge(link);

  // Transition back to the parent element position
  linkUpdate
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.diagonal)(d, d.parent);
    });

  // Remove any exiting links
  const linkExit = link
    .exit()
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      const o = {
        x: source.x,
        y: source.y,
      };
      return (0,_utils__WEBPACK_IMPORTED_MODULE_1__.diagonal)(o, o);
    })
    .remove();

  // Store the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}


/***/ }),

/***/ "./src/traceability/scripts/utils.js":
/*!*******************************************!*\
  !*** ./src/traceability/scripts/utils.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "click": () => (/* binding */ click),
/* harmony export */   "collapse": () => (/* binding */ collapse),
/* harmony export */   "diagonal": () => (/* binding */ diagonal),
/* harmony export */   "linkHoverHandler": () => (/* binding */ linkHoverHandler)
/* harmony export */ });
/* harmony import */ var _data_productData_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/productData.json */ "./src/traceability/scripts/data/productData.json");
/* harmony import */ var _initialiseTree__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialiseTree */ "./src/traceability/scripts/initialiseTree.js");
/* harmony import */ var _updateTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updateTree */ "./src/traceability/scripts/updateTree.js");




// Collapse the node and all it's children
function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

// Creates a curved (diagonal) path from parent to the child nodes
function diagonal(s, d) {
    return `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
}

function addProductDetails(d) {
    const product = _data_productData_json__WEBPACK_IMPORTED_MODULE_0__[d.data.name];
    const productIngredients = d.children || d._children;

    document.getElementById("productName").innerText = d.data.name;
    document.getElementById("lotNumber").innerText = product.lotNumber;
    document.getElementById("quantity").innerText = product.quantity;
    document.getElementById("date").innerText = product.date;
    document.getElementById("operation").innerText = "Raw Material";
    document.getElementById("materials").innerText = "Raw Material";

    if (productIngredients) {
        const firstIngredientData = _data_productData_json__WEBPACK_IMPORTED_MODULE_0__[productIngredients[0].data.name];
        document.getElementById("operation").innerText =
            firstIngredientData.processName;
        document.getElementById("materials").innerText = productIngredients.map(
            (p) => " " + p.data.name
        );
    }
}

// Toggle children on click.
function click(e, d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    (0,_updateTree__WEBPACK_IMPORTED_MODULE_2__.update)(d);
    addProductDetails(d);
}

function linkHoverHandler(event, node) {
    if (event.type === "mouseout") {
        return _initialiseTree__WEBPACK_IMPORTED_MODULE_1__.tooltip.style("visibility", "hidden");
    }
    const product = _data_productData_json__WEBPACK_IMPORTED_MODULE_0__[node.data.name];
    const tooltipHtml =
        `Process: ${product.processName}` + `<br>Work Order:${product.workOrder}`;
    _initialiseTree__WEBPACK_IMPORTED_MODULE_1__.tooltip.style("visibility", "visible")
        .style("top", event.pageY - 70 + "px")
        .style("left", event.pageX - 130 + "px")
        .html(tooltipHtml);
}


/***/ }),

/***/ "./src/traceability/scripts/data/productData.json":
/*!********************************************************!*\
  !*** ./src/traceability/scripts/data/productData.json ***!
  \********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Guar PreMix":{"lotNumber":"GUA-001","processName":"Mixing","workOrder":"MIX-001","date":"06/07/2022","quantity":11.25},"Shampoo A":{"lotNumber":"SHA-001","quantity":11.26,"date":"06/07/2022"},"Guar Powder":{"lotNumber":"GPW-001","processName":"Premixing","workOrder":"PRE-001","date":"05/07/2022","quantity":1.25},"Water":{"lotNumber":"WTR-001","processName":"Premixing","workOrder":"PRE-001","date":"05/07/2022","quantity":10},"Fragrance A":{"lotNumber":"FRG-001","processName":"Mixing","workOrder":"MIX-001","date":"06/07/2022","quantity":0.1}}');

/***/ }),

/***/ "./src/traceability/scripts/data/treeData.json":
/*!*****************************************************!*\
  !*** ./src/traceability/scripts/data/treeData.json ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Shampoo A","parent":"null","children":[{"name":"Guar PreMix","parent":"Shampoo A","children":[{"name":"Guar Powder","parent":"Guar PreMix"},{"name":"Water","parent":"Guar PreMix"}]},{"name":"Fragrance A","parent":"Top Level"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-40f6a9"], () => (__webpack_exec__("./src/traceability/scripts/main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RKa0Q7QUFDUDtBQUNMOztBQUV0QztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCxnQkFBZ0IsS0FBSyxFQUFFO0FBQ3ZCLGdCQUFnQixpQkFBaUIsRUFBRSxJQUFJO0FBQ3ZDLGdCQUFnQixpQkFBaUIsRUFBRSxJQUFJO0FBQ3ZDLGdCQUFnQixLQUFLLEVBQUUsSUFBSTtBQUMzQjs7QUFFQTtBQUNBLG9CQUFvQixtREFBVztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsbURBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFNO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZUFBZSwwREFBYTtBQUM1QjtBQUNBLG9CQUFvQixtREFBVztBQUMvQjtBQUNBLG9CQUFvQixvQkFBb0Isc0JBQXNCLGtCQUFrQjtBQUNoRixJQUFJLDBEQUNVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3RyYWNlYWJpbGl0eS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy90cmFjZWFiaWxpdHkvc3R5bGUuY3NzPzZlMWQiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy90cmFjZWFiaWxpdHkvc2NyaXB0cy9pbml0aWFsaXNlVHJlZS5qcyIsIndlYnBhY2s6Ly9tYW51ZmFjdHVyaW5nLWRhdGEtdml6Ly4vc3JjL3RyYWNlYWJpbGl0eS9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vbWFudWZhY3R1cmluZy1kYXRhLXZpei8uL3NyYy90cmFjZWFiaWxpdHkvc2NyaXB0cy91cGRhdGVUcmVlLmpzIiwid2VicGFjazovL21hbnVmYWN0dXJpbmctZGF0YS12aXovLi9zcmMvdHJhY2VhYmlsaXR5L3NjcmlwdHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7IFxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgXFxuXFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxufVxcblxcbmgxLCAjdHJlZXtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXFxuICAgIHBhZGRpbmc6MTBweFxcbn1cXG5cXG4jcHJvZHVjdERldGFpbHN7XFxuICAgIHBhZGRpbmc6IDEwcHg7O1xcbn1cXG5cXG4ubm9kZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vZGUgY2lyY2xlOmhvdmVye1xcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcXG59XFxuXFxuLm5vZGUgY2lyY2xlIHtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgc3Ryb2tlOiBzdGVlbGJsdWU7XFxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xcbn1cXG5cXG4ubm9kZSB0ZXh0IHtcXG4gICAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubGluayB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogI2NjYztcXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmxpbms6aG92ZXJ7XFxuICAgIHN0cm9rZS13aWR0aDogNXB4O1xcbiAgICBzdHJva2U6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnRvb2x0aXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdHJhY2VhYmlsaXR5L3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtDQUM1QixzQkFBc0I7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCOztBQUV6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBcXG4gICAgbWF4LXdpZHRoOiAxMDgwcHg7IFxcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG4gICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDsgXFxuXFx0ZmxvYXQ6IG5vbmUgIWltcG9ydGFudDsgXFxufVxcblxcbmgxLCAjdHJlZXtcXG4gICAgZGlzcGxheTpmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjsgXFxuICAgIHBhZGRpbmc6MTBweFxcbn1cXG5cXG4jcHJvZHVjdERldGFpbHN7XFxuICAgIHBhZGRpbmc6IDEwcHg7O1xcbn1cXG5cXG4ubm9kZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5vZGUgY2lyY2xlOmhvdmVye1xcbiAgICBzdHJva2Utd2lkdGg6IDVweDtcXG59XFxuXFxuLm5vZGUgY2lyY2xlIHtcXG4gICAgZmlsbDogI2ZmZjtcXG4gICAgc3Ryb2tlOiBzdGVlbGJsdWU7XFxuICAgIHN0cm9rZS13aWR0aDogM3B4O1xcbn1cXG5cXG4ubm9kZSB0ZXh0IHtcXG4gICAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubGluayB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogI2NjYztcXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuXFxuLmxpbms6aG92ZXJ7XFxuICAgIHN0cm9rZS13aWR0aDogNXB4O1xcbiAgICBzdHJva2U6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLnRvb2x0aXB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6ICNjY2M7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZm9udDogMTJweCBzYW5zLXNlcmlmO1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgdHJlZURhdGEgZnJvbSBcIi4vZGF0YS90cmVlRGF0YS5qc29uXCI7XG5cbi8vIG1vZGlmaWVkIGZyb20gaHR0cHM6Ly9ibC5vY2tzLm9yZy9kM25vb2IvODM3NTA5MlxuLy8gU2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBkaWFncmFtXG5jb25zdCBtYXJnaW4gPSB7XG4gIHRvcDogMjAsXG4gIHJpZ2h0OiA5MCxcbiAgYm90dG9tOiAzMCxcbiAgbGVmdDogOTAsXG59O1xuY29uc3Qgd2lkdGggPSA5NjAgLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbmNvbnN0IGhlaWdodCA9IDUwMCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuXG4vLyBkZWNsYXJlcyBhIHRyZWUgbGF5b3V0IGFuZCBhc3NpZ25zIHRoZSBzaXplXG5leHBvcnQgY29uc3QgdHJlZW1hcCA9IGQzLnRyZWUoKS5zaXplKFtoZWlnaHQsIHdpZHRoXSk7XG4vLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGJvZHkgb2YgdGhlIHBhZ2Vcbi8vIGFwcGVuZHMgYSAnZ3JvdXAnIGVsZW1lbnQgdG8gJ3N2Zydcbi8vIG1vdmVzIHRoZSAnZ3JvdXAnIGVsZW1lbnQgdG8gdGhlIHRvcCBsZWZ0IG1hcmdpblxuZXhwb3J0IGNvbnN0IHN2ZyA9IGQzXG4gIC5zZWxlY3QoXCIjdHJlZVwiKVxuICAuYXBwZW5kKFwic3ZnXCIpXG4gIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKyBtYXJnaW4ucmlnaHQgKyBtYXJnaW4ubGVmdClcbiAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0ICsgbWFyZ2luLnRvcCArIG1hcmdpbi5ib3R0b20pXG4gIC5hcHBlbmQoXCJnXCIpXG4gIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgbWFyZ2luLmxlZnQgKyBcIixcIiArIG1hcmdpbi50b3AgKyBcIilcIik7XG5cbi8vIGNyZWF0ZSBhIHRvb2x0aXBcbmV4cG9ydCBjb25zdCB0b29sdGlwID0gZDNcbiAgLnNlbGVjdChcIiN0cmVlXCIpXG4gIC5hcHBlbmQoXCJkaXZcIilcbiAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKVxuICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwiaGlkZGVuXCIpXG4gIC50ZXh0KFwiSSdtIGEgdG9vbHRpcCFcIik7XG5cbi8vIEFzc2lnbnMgcGFyZW50LCBjaGlsZHJlbiwgaGVpZ2h0LCBkZXB0aFxuZXhwb3J0IGNvbnN0IHJvb3QgPSBkMy5oaWVyYXJjaHkodHJlZURhdGEsIGZ1bmN0aW9uIChkKSB7XG4gIHJldHVybiBkLmNoaWxkcmVuO1xufSk7XG5yb290LngwID0gaGVpZ2h0IC8gMjtcbnJvb3QueTAgPSAwO1xuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByb290LCBzdmcsIHRyZWVtYXAgfSBmcm9tIFwiLi9pbml0aWFsaXNlVHJlZVwiO1xuaW1wb3J0IHsgdXBkYXRlIH0gZnJvbSBcIi4vdXBkYXRlVHJlZVwiO1xuaW1wb3J0IHsgY29sbGFwc2UgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBwcm9kdWN0RGV0YWlsVmlldyA9IHt9O1xucHJvZHVjdERldGFpbFZpZXcubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdE5hbWVcIik7XG5wcm9kdWN0RGV0YWlsVmlldy5sb3ROdW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvdE51bWJlclwiKTtcblxuLy8gQ29sbGFwc2UgYWZ0ZXIgdGhlIHNlY29uZCBsZXZlbFxucm9vdC5jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcblxuLy9IQUNLIHRyZWUgaXMgaW1wbGljdGx5IGluaXRpYWxpc2VkIGJ5IGltcG9ydGluZyB0cmVlbWFwLCBzdmcgYW5kIHJvb3Rcbi8vIGNhbiBkZWZpbmUgaW50aWFsaXNlIGZ1bmN0aW9uIHRvIHJldHVybiB0aGVzZSwgYnV0IHRoZXNlIHZhbHVlcyBuZWVkIHRvIGJlIHBhc3NlZCBhcm91bmRcbi8vIGNhbiBpbml0aWFsaXNlIHdpdGggdW5kZWZpbmVkIGFuZCB0aGVuIGFzc2lnbiB2YWx1ZXMgaW4gaW5pdGlhbGlzZSBmdW5jdGlvbj9cbnVwZGF0ZShyb290LCB0cmVlbWFwLCBzdmcpO1xuXG4vL1RPRE8gYWRkIHdoZXJlIHVzZWQgZnVuY3Rpb25hbGl0eVxuLy8gZS5nLiB3aGVuIHlvdSBjbGljayBvbiBhIHJhdyBtYXRlcmlhbCBpdCBzaG93cyBncmFwaCBvZiB3aGVyZSByYXcgbWF0ZXJpYWwgaXMgdXNlZFxuIiwiaW1wb3J0IHsgcm9vdCwgc3ZnLCB0cmVlbWFwIH0gZnJvbSBcIi4vaW5pdGlhbGlzZVRyZWVcIjtcbmltcG9ydCB7IGNsaWNrLCBkaWFnb25hbCwgbGlua0hvdmVySGFuZGxlciB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbmxldCBub2RlSWQgPSAwO1xuY29uc3QgZHVyYXRpb24gPSA3NTA7XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGUoc291cmNlKSB7XG4gIC8vIEFzc2lnbnMgdGhlIHggYW5kIHkgcG9zaXRpb24gZm9yIHRoZSBub2Rlc1xuICBjb25zdCB0cmVlRGF0YSA9IHRyZWVtYXAocm9vdCk7XG5cbiAgLy8gQ29tcHV0ZSB0aGUgbmV3IHRyZWUgbGF5b3V0LlxuICBjb25zdCBub2RlcyA9IHRyZWVEYXRhLmRlc2NlbmRhbnRzKCksXG4gICAgbGlua3MgPSB0cmVlRGF0YS5kZXNjZW5kYW50cygpLnNsaWNlKDEpO1xuXG4gIC8vIE5vcm1hbGl6ZSBmb3IgZml4ZWQtZGVwdGguXG4gIG5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAvLyBtb3ZlIG5vZGVzIHRvIGhvcml6b250YWwgbG9jYXRpb25zIGJhc2VkIG9uIHRyZWUgZGVwdGhcbiAgICAvLyBpLmUuIGkuZS4gYXQgdHJlZSBsZXZlbCAoVEwpIDAgOiB5PTAsIFRMIDE6eT0xODAsIFRMMjogeT0zNjAgLi4uXG4gICAgZC55ID0gZC5kZXB0aCAqIDE4MDtcbiAgfSk7XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqIE5vZGVzIHNlY3Rpb24gKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLy8gVXBkYXRlIHRoZSBub2Rlcy4uLlxuICBjb25zdCBub2RlID0gc3ZnLnNlbGVjdEFsbChcImcubm9kZVwiKS5kYXRhKG5vZGVzLCBmdW5jdGlvbiAoZCkge1xuICAgIHJldHVybiBkLmlkIHx8IChkLmlkID0gKytub2RlSWQpO1xuICB9KTtcblxuICAvLyBFbnRlciBhbnkgbmV3IG5vZGVzIGF0IHRoZSBwYXJlbnQncyBwcmV2aW91cyBwb3NpdGlvbi5cbiAgY29uc3Qgbm9kZUVudGVyID0gbm9kZVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBzb3VyY2UueTAgKyBcIixcIiArIHNvdXJjZS54MCArIFwiKVwiO1xuICAgIH0pO1xuICBub2RlRW50ZXIub24oXCJjbGlja1wiLCBjbGljayk7XG5cbiAgLy8gQWRkIENpcmNsZSBmb3IgdGhlIG5vZGVzXG4gIG5vZGVFbnRlclxuICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibm9kZVwiKVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLl9jaGlsZHJlbiA/IFwibGlnaHRzdGVlbGJsdWVcIiA6IFwiI2ZmZlwiO1xuICAgIH0pO1xuXG4gIC8vIEFkZCBsYWJlbHMgZm9yIHRoZSBub2Rlc1xuICBub2RlRW50ZXJcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiZHlcIiwgXCItMC41ZW1cIilcbiAgICAuYXR0cihcInhcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmNoaWxkcmVuIHx8IGQuX2NoaWxkcmVuID8gLTEzIDogMTM7XG4gICAgfSlcbiAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gZC5jaGlsZHJlbiB8fCBkLl9jaGlsZHJlbiA/IFwiZW5kXCIgOiBcInN0YXJ0XCI7XG4gICAgfSlcbiAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuZGF0YS5uYW1lO1xuICAgIH0pO1xuXG4gIC8vIFVQREFURVxuICBjb25zdCBub2RlVXBkYXRlID0gbm9kZUVudGVyLm1lcmdlKG5vZGUpO1xuXG4gIC8vIFRyYW5zaXRpb24gdG8gdGhlIHByb3BlciBwb3NpdGlvbiBmb3IgdGhlIG5vZGVcbiAgbm9kZVVwZGF0ZVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIGQueSArIFwiLFwiICsgZC54ICsgXCIpXCI7XG4gICAgfSk7XG5cbiAgLy8gVXBkYXRlIHRoZSBub2RlIGF0dHJpYnV0ZXMgYW5kIHN0eWxlXG4gIG5vZGVVcGRhdGVcbiAgICAuc2VsZWN0KFwiY2lyY2xlLm5vZGVcIilcbiAgICAuYXR0cihcInJcIiwgMTApXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQuX2NoaWxkcmVuID8gXCJsaWdodHN0ZWVsYmx1ZVwiIDogXCIjZmZmXCI7XG4gICAgfSlcbiAgICAuYXR0cihcImN1cnNvclwiLCBcInBvaW50ZXJcIik7XG5cbiAgLy8gUmVtb3ZlIGFueSBleGl0aW5nIG5vZGVzXG4gIGNvbnN0IG5vZGVFeGl0ID0gbm9kZVxuICAgIC5leGl0KClcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBzb3VyY2UueSArIFwiLFwiICsgc291cmNlLnggKyBcIilcIjtcbiAgICB9KVxuICAgIC5yZW1vdmUoKTtcblxuICAvLyBPbiBleGl0IHJlZHVjZSB0aGUgbm9kZSBjaXJjbGVzIHNpemUgdG8gMFxuICBub2RlRXhpdC5zZWxlY3QoXCJjaXJjbGVcIikuYXR0cihcInJcIiwgMWUtNik7XG5cbiAgLy8gT24gZXhpdCByZWR1Y2UgdGhlIG9wYWNpdHkgb2YgdGV4dCBsYWJlbHNcbiAgbm9kZUV4aXQuc2VsZWN0KFwidGV4dFwiKS5zdHlsZShcImZpbGwtb3BhY2l0eVwiLCAxZS02KTtcblxuICAvLyAqKioqKioqKioqKioqKioqKiogbGlua3Mgc2VjdGlvbiAqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuICAvLyBVcGRhdGUgdGhlIGxpbmtzLi4uXG4gIGNvbnN0IGxpbmsgPSBzdmcuc2VsZWN0QWxsKFwicGF0aC5saW5rXCIpLmRhdGEobGlua3MsIGZ1bmN0aW9uIChkKSB7XG4gICAgcmV0dXJuIGQuaWQ7XG4gIH0pO1xuXG4gIC8vIEVudGVyIGFueSBuZXcgbGlua3MgYXQgdGhlIHBhcmVudCdzIHByZXZpb3VzIHBvc2l0aW9uLlxuICBjb25zdCBsaW5rRW50ZXIgPSBsaW5rXG4gICAgLmVudGVyKClcbiAgICAuaW5zZXJ0KFwicGF0aFwiLCBcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwibGlua1wiKVxuICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgY29uc3QgbyA9IHtcbiAgICAgICAgeDogc291cmNlLngwLFxuICAgICAgICB5OiBzb3VyY2UueTAsXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgIH0pO1xuXG4gIGxpbmtFbnRlci5vbihcIm1vdXNlb3ZlclwiLCAoZSwgbCkgPT4gbGlua0hvdmVySGFuZGxlcihlLCBsKSk7XG4gIGxpbmtFbnRlci5vbihcIm1vdXNlb3V0XCIsIChlLCBsKSA9PiBsaW5rSG92ZXJIYW5kbGVyKGUsIGwpKTtcbiAgbGlua0VudGVyLm9uKFwibW91c2Vtb3ZlXCIsIChlLCBsKSA9PiBsaW5rSG92ZXJIYW5kbGVyKGUsIGwpKTtcblxuICAvLyBVUERBVEVcbiAgY29uc3QgbGlua1VwZGF0ZSA9IGxpbmtFbnRlci5tZXJnZShsaW5rKTtcblxuICAvLyBUcmFuc2l0aW9uIGJhY2sgdG8gdGhlIHBhcmVudCBlbGVtZW50IHBvc2l0aW9uXG4gIGxpbmtVcGRhdGVcbiAgICAudHJhbnNpdGlvbigpXG4gICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGRpYWdvbmFsKGQsIGQucGFyZW50KTtcbiAgICB9KTtcblxuICAvLyBSZW1vdmUgYW55IGV4aXRpbmcgbGlua3NcbiAgY29uc3QgbGlua0V4aXQgPSBsaW5rXG4gICAgLmV4aXQoKVxuICAgIC50cmFuc2l0aW9uKClcbiAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBjb25zdCBvID0ge1xuICAgICAgICB4OiBzb3VyY2UueCxcbiAgICAgICAgeTogc291cmNlLnksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGRpYWdvbmFsKG8sIG8pO1xuICAgIH0pXG4gICAgLnJlbW92ZSgpO1xuXG4gIC8vIFN0b3JlIHRoZSBvbGQgcG9zaXRpb25zIGZvciB0cmFuc2l0aW9uLlxuICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgZC54MCA9IGQueDtcbiAgICBkLnkwID0gZC55O1xuICB9KTtcbn1cbiIsImltcG9ydCBwcm9kdWN0RGF0YSBmcm9tIFwiLi9kYXRhL3Byb2R1Y3REYXRhLmpzb25cIjtcbmltcG9ydCB7IHRvb2x0aXAgfSBmcm9tIFwiLi9pbml0aWFsaXNlVHJlZVwiO1xuaW1wb3J0IHsgdXBkYXRlIH0gZnJvbSBcIi4vdXBkYXRlVHJlZVwiO1xuXG4vLyBDb2xsYXBzZSB0aGUgbm9kZSBhbmQgYWxsIGl0J3MgY2hpbGRyZW5cbmV4cG9ydCBmdW5jdGlvbiBjb2xsYXBzZShkKSB7XG4gICAgaWYgKGQuY2hpbGRyZW4pIHtcbiAgICAgICAgZC5fY2hpbGRyZW4gPSBkLmNoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbi5mb3JFYWNoKGNvbGxhcHNlKTtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgfVxufVxuXG4vLyBDcmVhdGVzIGEgY3VydmVkIChkaWFnb25hbCkgcGF0aCBmcm9tIHBhcmVudCB0byB0aGUgY2hpbGQgbm9kZXNcbmV4cG9ydCBmdW5jdGlvbiBkaWFnb25hbChzLCBkKSB7XG4gICAgcmV0dXJuIGBNICR7cy55fSAke3MueH1cbiAgICAgICAgICAgIEMgJHsocy55ICsgZC55KSAvIDJ9ICR7cy54fSxcbiAgICAgICAgICAgICAgJHsocy55ICsgZC55KSAvIDJ9ICR7ZC54fSxcbiAgICAgICAgICAgICAgJHtkLnl9ICR7ZC54fWA7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2R1Y3REZXRhaWxzKGQpIHtcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdERhdGFbZC5kYXRhLm5hbWVdO1xuICAgIGNvbnN0IHByb2R1Y3RJbmdyZWRpZW50cyA9IGQuY2hpbGRyZW4gfHwgZC5fY2hpbGRyZW47XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3ROYW1lXCIpLmlubmVyVGV4dCA9IGQuZGF0YS5uYW1lO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG90TnVtYmVyXCIpLmlubmVyVGV4dCA9IHByb2R1Y3QubG90TnVtYmVyO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVhbnRpdHlcIikuaW5uZXJUZXh0ID0gcHJvZHVjdC5xdWFudGl0eTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikuaW5uZXJUZXh0ID0gcHJvZHVjdC5kYXRlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3BlcmF0aW9uXCIpLmlubmVyVGV4dCA9IFwiUmF3IE1hdGVyaWFsXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRlcmlhbHNcIikuaW5uZXJUZXh0ID0gXCJSYXcgTWF0ZXJpYWxcIjtcblxuICAgIGlmIChwcm9kdWN0SW5ncmVkaWVudHMpIHtcbiAgICAgICAgY29uc3QgZmlyc3RJbmdyZWRpZW50RGF0YSA9IHByb2R1Y3REYXRhW3Byb2R1Y3RJbmdyZWRpZW50c1swXS5kYXRhLm5hbWVdO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZXJhdGlvblwiKS5pbm5lclRleHQgPVxuICAgICAgICAgICAgZmlyc3RJbmdyZWRpZW50RGF0YS5wcm9jZXNzTmFtZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXRlcmlhbHNcIikuaW5uZXJUZXh0ID0gcHJvZHVjdEluZ3JlZGllbnRzLm1hcChcbiAgICAgICAgICAgIChwKSA9PiBcIiBcIiArIHAuZGF0YS5uYW1lXG4gICAgICAgICk7XG4gICAgfVxufVxuXG4vLyBUb2dnbGUgY2hpbGRyZW4gb24gY2xpY2suXG5leHBvcnQgZnVuY3Rpb24gY2xpY2soZSwgZCkge1xuICAgIGlmIChkLmNoaWxkcmVuKSB7XG4gICAgICAgIGQuX2NoaWxkcmVuID0gZC5jaGlsZHJlbjtcbiAgICAgICAgZC5jaGlsZHJlbiA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZC5jaGlsZHJlbiA9IGQuX2NoaWxkcmVuO1xuICAgICAgICBkLl9jaGlsZHJlbiA9IG51bGw7XG4gICAgfVxuICAgIHVwZGF0ZShkKTtcbiAgICBhZGRQcm9kdWN0RGV0YWlscyhkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtIb3ZlckhhbmRsZXIoZXZlbnQsIG5vZGUpIHtcbiAgICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZW91dFwiKSB7XG4gICAgICAgIHJldHVybiB0b29sdGlwLnN0eWxlKFwidmlzaWJpbGl0eVwiLCBcImhpZGRlblwiKTtcbiAgICB9XG4gICAgY29uc3QgcHJvZHVjdCA9IHByb2R1Y3REYXRhW25vZGUuZGF0YS5uYW1lXTtcbiAgICBjb25zdCB0b29sdGlwSHRtbCA9XG4gICAgICAgIGBQcm9jZXNzOiAke3Byb2R1Y3QucHJvY2Vzc05hbWV9YCArIGA8YnI+V29yayBPcmRlcjoke3Byb2R1Y3Qud29ya09yZGVyfWA7XG4gICAgdG9vbHRpcFxuICAgICAgICAuc3R5bGUoXCJ2aXNpYmlsaXR5XCIsIFwidmlzaWJsZVwiKVxuICAgICAgICAuc3R5bGUoXCJ0b3BcIiwgZXZlbnQucGFnZVkgLSA3MCArIFwicHhcIilcbiAgICAgICAgLnN0eWxlKFwibGVmdFwiLCBldmVudC5wYWdlWCAtIDEzMCArIFwicHhcIilcbiAgICAgICAgLmh0bWwodG9vbHRpcEh0bWwpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9