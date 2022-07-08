import '../style.css';
import { root, svg, treemap } from './initialiseTree';
import { update } from './updateTree';
import { collapse } from './utils';

const productDetailView = {}
productDetailView.name = document.getElementById("productName")
productDetailView.lotNumber = document.getElementById("lotNumber")


// Collapse after the second level
root.children.forEach(collapse);

//HACK tree is implictly initialised by importing treemap, svg and root
// can define intialise function to return these, but these values need to be passed around
// can initialise with undefined and then assign values in initialise function?
update(root, treemap, svg);

//TODO add where used functionality
// e.g. when you click on a raw material it shows graph of where raw material is used