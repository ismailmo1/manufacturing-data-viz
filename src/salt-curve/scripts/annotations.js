import saltCurveData from "./data/saltCurve.json";
import { calculateConcentration } from "./interpolation";
import { maxXAxis } from "./saltCurveChart";

const concentrationVals = saltCurveData["concentration"];
const viscosityVals = saltCurveData["viscosity"];

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
export function updateAnnotations(viscosity, label, chart) {
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
