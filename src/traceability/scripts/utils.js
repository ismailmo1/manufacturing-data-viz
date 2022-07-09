import productData from "./data/productData.json";
import { tooltip } from "./initialiseTree";
import { update } from "./updateTree";

// Collapse the node and all it's children
export function collapse(d) {
    if (d.children) {
        d._children = d.children;
        d._children.forEach(collapse);
        d.children = null;
    }
}

// Creates a curved (diagonal) path from parent to the child nodes
export function diagonal(s, d) {
    return `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`;
}

function addProductDetails(d) {
    const product = productData[d.data.name];
    const productIngredients = d.children || d._children;

    document.getElementById("productName").innerText = d.data.name;
    document.getElementById("lotNumber").innerText = product.lotNumber;
    document.getElementById("quantity").innerText = product.quantity;
    document.getElementById("date").innerText = product.date;
    document.getElementById("operation").innerText = "Raw Material";
    document.getElementById("materials").innerText = "Raw Material";

    if (productIngredients) {
        const firstIngredientData = productData[productIngredients[0].data.name];
        document.getElementById("operation").innerText =
            firstIngredientData.processName;
        document.getElementById("materials").innerText = productIngredients.map(
            (p) => " " + p.data.name
        );
    }
}

// Toggle children on click.
export function click(e, d) {
    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
    addProductDetails(d);
}

export function linkHoverHandler(event, node) {
    if (event.type === "mouseout") {
        return tooltip.style("visibility", "hidden");
    }
    const product = productData[node.data.name];
    const tooltipHtml =
        `Process: ${product.processName}` + `<br>Work Order:${product.workOrder}`;
    tooltip
        .style("visibility", "visible")
        .style("top", event.pageY - 70 + "px")
        .style("left", event.pageX - 130 + "px")
        .html(tooltipHtml);
}
