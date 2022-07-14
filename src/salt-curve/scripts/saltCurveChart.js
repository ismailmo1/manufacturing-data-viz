import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import saltCurveData from "./data/saltCurve.json";

Chart.register(annotationPlugin);
const saltCurveCtx = document.getElementById("saltCurveChart");

const concentrationVals = saltCurveData["concentration"];
const viscosityVals = saltCurveData["viscosity"];
// round to nearest 0.5
export const maxXAxis = Math.ceil(Math.max(...concentrationVals) / 0.5) * 0.5;

export const saltCurveChart = new Chart(saltCurveCtx, {
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
