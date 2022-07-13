import "../style.css";
import { comparisonChart } from "./charts/comparisonChart";
import { afterChart, beforeChart } from "./charts/scheduleCharts";

// chart.update is not really necessary
// only included here so we can import in charts
// and so this file can be used as entry point for webpack

beforeChart.update();
afterChart.update();
comparisonChart.update();

// TODO: add cleaning schedule optimisation
