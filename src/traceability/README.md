# Product Traceability Tree

![traceability tree](../../docs/assets/traceability.gif)

The goal of this visualisation is to show the process routes i.e. how the products move through the manufacturing process and how the MES tracks all the product data generated throughout the process.

The visualisation currently tracks the process going backwards, i.e. the initial node on the far left is the final product, and at each level of the tree we are showing the materials and process used to generate the product. However this visualisation can be extended to go forwards in the process: we start with a raw material and the subsequent levels show all the products that used that specific batch of raw material: a "where used" view that is common is ERP systems.

You don't need to be an expert with [d3js](https://d3js.org/) but if you are making any changes to the animations or logic it'll help to atleast go through the [homepage](https://d3js.org/) or you can check out this [introduction video series from Academind](https://www.youtube.com/watch?v=TOJ9yjvlapY).

## Tree Drawing

The code was mostly adapted from [this snippet](https://bl.ocks.org/d3noob/8375092), the key difference in this repo is that it is split into the `./scripts/initialiseTree.js` (declarations) and `./scripts/updateTree.js` (update/enter/exit methods) files.

## Data binding

Data is imported from json files: the `./data/productData.json` holds detailed data on the products and the related process data, and `./data/treeData.json` provides data that is responsible for the child/parent relationships used to generate the tree structure.

## Tree structure

The tree data is used to create a `d3.hierarchy` data structure [(read more here)](https://observablehq.com/@d3/d3-hierarchy) which is passed to the `d3.tree` to initalise a [tree layout](https://observablehq.com/@d3/tree)

```
// ./scripts/initialiseTree.js
export const treemap = d3.tree().size([height, width]);

...

export const root = d3.hierarchy(treeData, function (d) {
  return d.children;
});
```

Then we create the tree layout:s

```
// ./scripts/updateTree.js

  const treeData = treemap(root);

  // Compute the new tree layout.
  const nodes = treeData.descendants(),
    links = treeData.descendants().slice(1);

```

## Product Data

The product data is used to add more context to the tree diagrams so the user can view more detailed information.

In the click event handler for the nodes, we show product details below the tree diagrams:

```
// ./scripts/utils.js

function addProductDetails(d) {
    const product = productData[d.data.name];
    const productIngredients = d.children || d._children;

    document.getElementById("productName").innerText = d.data.name;
    ...
}
```

and the hover event handler for the links which adds a tooltip with details:

```
// ./scripts/utils.js

export function linkHoverHandler(event, node) {
    const product = productData[node.data.name];
    const tooltipHtml =
        `Process: ${product.processName}` + `<br>Work Order:${product.workOrder}`;
    ...
}
```

Checkout this repos [documentation page](../../docs/README.md#data-integration) for implementation ideas on how to integrate with external data sources, for this visualisation the raw data (i.e. a response from the MES web API or results from a SQL query) for creating the hierarchical relationship will need to be processed so that it matches the format of `./data/treeData.json`.s
