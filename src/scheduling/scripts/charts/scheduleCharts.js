import Chart from "chart.js/auto";
import annotationPlugin from "chartjs-plugin-annotation";
import vfData from "../data/optsched.json";
import { bgColourMap } from "../utils/colours";
import { barClickHandler, legendClickHandler } from "../utils/eventHandlers";
import { vfChartAfterData, vfChartBeforeData } from "./chartData";

import { getDeadlineAnnotations } from "../utils/annotations";

Chart.register(annotationPlugin);

const beforeCtx = document.getElementById("beforeChart");
const afterCtx = document.getElementById("afterChart");

export const beforeChart = new Chart(beforeCtx, {
  type: "bar",
  data: {
    labels: ["Before Optimisation"],
    datasets: vfChartBeforeData,
  },
  options: {
    onClick: barClickHandler,

    plugins: {
      legend: {
        title: {
          display: true,
          text: "order number",
        },
        onClick: legendClickHandler,
      },
      annotation: {
        drawTime: "beforeDatasetsDraw",
        annotations: () => getDeadlineAnnotations(vfData, bgColourMap),
      },
    },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        afterFit: function (scaleInstance) {
          scaleInstance.width = 120; // sets the width to 100px
        },
      },
    },
  },
});

export const afterChart = new Chart(afterCtx, {
  type: "bar",
  data: {
    labels: ["After Optimisation"],
    datasets: vfChartAfterData,
  },
  options: {
    onClick: barClickHandler,
    plugins: {
      tooltip: {
        callbacks: {
          beforeLabel: function (context) {
            const orderNumber = context.dataset.label;
            const orderObj = vfData.find(
              (order) => order.order_number == orderNumber
            );
            return `${orderObj["original_sequence"]} => ${orderObj["sequence"]}`;
          },
        },
      },
      legend: { display: false },
      annotation: {
        annotations: () => getDeadlineAnnotations(vfData, bgColourMap),
      },
    },
    // },
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        afterFit: function (scaleInstance) {
          scaleInstance.width = 120; // sets the width to 100px
        },
      },
    },
  },
});
