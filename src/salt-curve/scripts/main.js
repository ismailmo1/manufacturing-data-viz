import saltCurveData from "../data/saltCurve.json";
import "../style.css";
import { updateAnnotations } from "./annotations";
import { saltCurveChart } from "./saltCurveChart";

saltCurveChart.update();

const desiredViscosityInput = document.getElementById("desiredViscosityInput");
const currentViscosityInput = document.getElementById("currentViscosityInput");
const viscosityVals = saltCurveData["viscosity"];
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
