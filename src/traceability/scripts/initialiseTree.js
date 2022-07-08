import * as d3 from 'd3';
import treeData from './data/treeData.json';

// modified from https://bl.ocks.org/d3noob/8375092
// Set the dimensions and margins of the diagram
const margin = {
    top: 20,
    right: 90,
    bottom: 30,
    left: 90
}
const width = 960 - margin.left - margin.right
const height = 500 - margin.top - margin.bottom;


// declares a tree layout and assigns the size
export const treemap = d3.tree().size([height, width]);
// append the svg object to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
export const svg = d3.select("#tree").append("svg")
    .attr("width", width + margin.right + margin.left)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" +
        margin.left + "," + margin.top + ")");

// create a tooltip
export const tooltip = d3.select("#tree")
    .append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .text("I'm a tooltip!");

// Assigns parent, children, height, depth
export const root = d3.hierarchy(treeData, function (d) {
    return d.children;
});
root.x0 = height / 2;
root.y0 = 0;