# Product Traceability Tree

![traceability tree](../../docs/assets/traceability.gif)

The goal of this visualisation is to show the process routes i.e. how the products move through the manufacturing process and how the MES tracks all the product data generated throughout the process.

The visualisation currently tracks the process going backwards, i.e. the initial node on the far left is the final product, and at each level of the tree we are showing the materials and process used to generate the product. However this visualisation can be extended to go forwards in the process: we start with a raw material and the subsequent levels show all the products that used that specific batch of raw material: a "where used" view that is common is ERP systems.

You don't need to be an expert with [d3js](https://d3js.org/) but if you are making any changes to the animations or logic it'll help to atleast go through the [homepage](https://d3js.org/) or you can check out this [introduction video series from Academind](https://www.youtube.com/watch?v=TOJ9yjvlapY).
