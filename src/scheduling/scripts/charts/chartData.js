import vfData from "../data/optsched.json";
import { bgColourMap } from "../utils/colours";
import { calculateLateness, sumLateness } from "../utils/lateness";

export const vfChartBeforeData = vfData
  .sort((a, b) => {
    return a["original_sequence"] - b["original_sequence"];
  })
  .map((data) => {
    return {
      data: [data["process_time"]],
      label: data["order_number"],
      backgroundColor: bgColourMap[data["order_number"]],
      borderColor: "rgb(0,0,0)",
      borderWidth: 0.4,
    };
  });

export const vfChartAfterData = vfData
  .sort((a, b) => {
    return a["sequence"] - b["sequence"];
  })
  .map((data) => {
    return {
      data: [data["process_time"]],
      label: data["order_number"],
      backgroundColor: bgColourMap[data["order_number"]],
      borderColor: "rgb(0,0,0)",
      borderWidth: 0.4,
    };
  });

export const optimisedLatenessData = [
  sumLateness(vfData) / vfData.length,
  sumLateness(vfData),
];

const unoptimisedLateness = calculateLateness(vfChartBeforeData);

export const unoptimisedLatenessData = [
  unoptimisedLateness / vfData.length,
  unoptimisedLateness,
];
