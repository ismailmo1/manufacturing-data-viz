export function getDeadlineAnnotations(vfData, bgColourMap) {
  // dynamically add annotations
  const deadLines = {};
  vfData.forEach((order, idx) => {
    deadLines[order["order_number"]] = {
      type: "line",
      label: {
        enabled: (ctx) => ctx.hovered,
        backgroundColor: "rgb(0,0,0)",
        drawTime: "afterDatasetsDraw",
        position: (ctx) => ctx.hoverPosition,
        content: (ctx) => [
          `Order ${order["order_number"]} deadline:`,
          `${order["dead_line"]}`,
        ],
      },
      yMin: -100,
      yMax: 100,
      xMin: order["dead_line"],
      xMax: order["dead_line"],
      borderColor: bgColourMap[order["order_number"]],
      borderWidth: 5,
      display: true,
      enter(ctx, event) {
        ctx.hovered = true;
        ctx.hoverPosition = (event.x / ctx.chart.chartArea.width) * 100 + "%";
        ctx.chart.update();
      },
      leave(ctx, event) {
        ctx.hovered = false;
        ctx.chart.update();
      },
    };
  });
  return deadLines;
}

export function filterAnnotations(chart, orderNumber, vfData, bgColourMap) {
  const otherOrderData = chart.data.datasets.filter(
    (data) => data.label !== orderNumber
  );
  const otherOrderNumbers = otherOrderData.map((data) => data.label);
  const annotations = getDeadlineAnnotations(vfData, bgColourMap);
  // check first annotation
  const isFiltered =
    chart.options.plugins.annotation.annotations[otherOrderNumbers[0]]
      .borderColor === "rgba(255,255,255,0)";
  if (!isFiltered) {
    // make all other order annotations transparent
    otherOrderNumbers.forEach((orderNum) => {
      annotations[orderNum].borderColor = "rgba(255,255,255,0)";
    });

    const selectedOrderData = vfData.find(
      (order) => order.order_number == orderNumber
    );
    // add lateness annotations
    const latenessAnnotation = getLatenessAnnotation(chart, selectedOrderData);
    annotations["lateness"] = latenessAnnotation;
  }
  chart.options.plugins.annotation.annotations = annotations;

  chart.update();
}

export function getLatenessAnnotation(chart, orderData) {
  const orderNumber = orderData["order_number"];
  let endTime = orderData["end_time"];
  let isLate = !orderData["tardiness_flag"];
  let latenessDuration = orderData["tardiness_duration"];

  if (chart.canvas.id === "beforeChart") {
    // calculate end time for before optimisation
    const chartData = chart.data.datasets;
    const orderObj = chartData.find((data) => data.label === orderNumber);
    const orderIdx = chartData.indexOf(orderObj);
    // dataset is ordered by sequence
    // grab all datasets except work orders after current
    const prevOrders = chartData.slice(0, orderIdx + 1);

    // sum up all values of remaining work orders
    endTime = prevOrders.reduce((prev, curr) => {
      return prev + curr.data[0];
    }, 0);

    // calculate lateness for before chart
    latenessDuration = endTime - orderData["dead_line"];
    isLate = latenessDuration > 0;
  }
  return {
    type: "line",
    label: {
      enabled: true,
      backgroundColor: "rgb(0,0,0)",
      drawTime: "afterDatasetsDraw",
      content: (ctx) =>
        isLate
          ? ["late by:", Math.round(latenessDuration)]
          : ["early by:", -Math.round(latenessDuration)],
    },
    arrowHeads: {
      start: {
        enabled: true,
        borderColor: "rgb(0,0,0)",
      },
      end: {
        enabled: true,
        borderColor: "rgb(0,0,0)",
      },
    },
    xMax: orderData["dead_line"],
    xMin: endTime,
    xScaleID: "x",
    yMax: 0,
    yMin: 0,
    yScaleID: "y",
    borderColor: "rgb(0,0,0)",
    borderWidth: 3,
    display: true,
  };
}
