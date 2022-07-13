import { vfChartAfterData, vfChartBeforeData } from "../charts/chartData";
import { afterChart, beforeChart } from "../charts/scheduleCharts";
import vfData from "../data/optsched.json";
import { bgColourMap } from "./colours";

import { filterAnnotations } from "./annotations";

export function filterOrders(chart, orderNumber) {
  // removes borders
  // makes all other orders transparent
  const otherOrderData = chart.data.datasets.filter(
    (data) => data.label !== orderNumber
  );
  const selectedOrderData = chart.data.datasets.find(
    (data) => data.label === orderNumber
  );
  // check first data obj
  const isFiltered =
    otherOrderData[0].backgroundColor === "rgba(255,255,255,0)";
  if (isFiltered) {
    // add border back
    selectedOrderData.borderColor = "rgb(0,0,0)";
    // unhide other orders
    otherOrderData.forEach((order) => {
      order.backgroundColor = bgColourMap[order.label];
      order.borderColor = "rgb(0,0,0)";
    });
  } else {
    // remove border
    selectedOrderData.borderColor = "rgba(255,255,255,0)";
    // hide other orders
    otherOrderData.forEach((order) => {
      order.backgroundColor = "rgba(255,255,255,0)";
      order.borderColor = "rgba(255,255,255,0)";
    });
  }
  chart.update();
}

export function legendClickHandler(e, legendItem, legend) {
  const selectedOrderNumber = legendItem.text;
  filterOrders(beforeChart, selectedOrderNumber);
  filterOrders(afterChart, selectedOrderNumber);
  filterAnnotations(beforeChart, selectedOrderNumber, vfData, bgColourMap);
  filterAnnotations(afterChart, selectedOrderNumber, vfData, bgColourMap);
}

export function barClickHandler(event, elements) {
  let data;
  if (event.chart.canvas.id === "afterChart") {
    data = vfChartAfterData[elements[0].datasetIndex];
  } else if (event.chart.canvas.id === "beforeChart") {
    data = vfChartBeforeData[elements[0].datasetIndex];
  }
  filterOrders(beforeChart, data.label);
  filterOrders(afterChart, data.label);
  filterAnnotations(beforeChart, data.label, vfData, bgColourMap);
  filterAnnotations(afterChart, data.label, vfData, bgColourMap);
  const orderObj = vfData.filter(
    (order) => order.order_number == data.label
  )[0];
  const orderDetailsCard = document.getElementById("detailInfo");
  orderDetailsCard.innerText = JSON.stringify(orderObj);
}
