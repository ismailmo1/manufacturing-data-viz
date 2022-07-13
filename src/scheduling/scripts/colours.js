import vfData from "./data/optsched.json";

const colours = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(255, 159, 64, 0.2)",
  "rgba(255, 205, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(201, 203, 207, 0.2)",
];

export const bgColourMap = {};

vfData.forEach((order, idx) => {
  bgColourMap[order["order_number"]] = colours[idx];
});
