import productData from './data/productData.json'
import { update } from "./updateTree"

// Collapse the node and all it's children
export function collapse(d) {
    if (d.children) {
        d._children = d.children
        d._children.forEach(collapse)
        d.children = null
    }
}

// Creates a curved (diagonal) path from parent to the child nodes
export function diagonal(s, d) {
    return `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

}

function addProductDetails(d) {
    const product = productData[d.data.name]

    document.getElementById('productName').innerText = d.data.name;
    document.getElementById('lotNumber').innerText = product.lotNumber;
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
    addProductDetails(d)
}