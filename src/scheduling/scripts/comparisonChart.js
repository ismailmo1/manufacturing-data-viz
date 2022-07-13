import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import "../style.css";
import { sumLateness, unoptimisedOrderLateness } from "./analysis";
import vfData from "./data/optsched.json";

Chart.register(annotationPlugin);

const comparisonCtx = document.getElementById("comparisonChart");
const latenessData = [sumLateness(vfData) / vfData.length, sumLateness(vfData)];

export const comparisonChart = new Chart(comparisonCtx, {
  type: "bar",
  labels: ["average", "sum"],
  data: {
    labels: ["Average Lateness", "Total Lateness"],
    datasets: [
      {
        label: "Unoptimised",
        data: [
          unoptimisedOrderLateness / vfData.length,
          unoptimisedOrderLateness,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 0.4,
      },
      {
        label: "Optimised",
        data: latenessData,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(0,0,0)",
        borderWidth: 0.4,
      },
    ],
  },
  options: {
    // },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        afterFit: function (scaleInstance) {
          scaleInstance.width = 120; // sets the width to 100px
        },
      },
    },
  },
});
