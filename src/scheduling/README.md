# Schedule Optimisation

The goal of this visualisation is to show the changes in schedule after optimisation by the virtual factory models and highlight the improvements it makes. In this case, the optimisation reduces the lateness of orders by shuffling around the orders, so earlier due dates are prioritised, however this optimisation can be extended in the future to optimise for other parameters, e.g. changeover time.

If you haven't used [chartjs](https://www.chartjs.org/) before, spend some time going through the [getting started](https://www.chartjs.org/docs/latest/) guide to make it easier to understand the rest of this documentation.

## Schedule view

These are just stacked bar charts, where the y axis is set as the index axis so it is horizontal, the relevant options to pass to the chart object is below:

```
//.scripts/charts/scheduleChart.js

options: {
    indexAxis: "y",
    scales: {
        x: {stacked: true},
        y: {stacked: true}
        }
    }
}
```

### Annotations

These were implemented using the [chartjs-plugin-annotation](https://www.chartjs.org/chartjs-plugin-annotation/latest/guide/) plugin. If you are going to add a new chart, make sure you register the plugin for each file you import the `Chart` object from chartjs:

```
Chart.register(annotationPlugin);
```

#### Deadline Annotations

Vertical lines were added to the chart to show the deadlines for each order by passing a function to the annotation plugin so the deadlines can be dynamically calculated from the optimised data:

```
//.scripts/charts/scheduleChart.js

 options: {
    plugins: {
        annotation: {
            drawTime: "beforeDatasetsDraw",
            annotations: () => getDeadlineAnnotations(vfData, bgColourMap),
        }
    }
}
```

`getDeadlineAnnotations` returns an object containing annotation objects (with the order number as the key) for each order in `vfData` - the optimisation results from virtual factory:

```
//./scripts/utils/annotations.js

export function getDeadlineAnnotations(vfData, bgColourMap) {
    const deadLines = {};
    vfData.forEach((order, idx) => {
        deadLines[order["order_number"]] = {
            type: "line",
            label: {...},
            xMin: order["dead_line"],
            ...
        };
    });
  return deadLines;
}
```
