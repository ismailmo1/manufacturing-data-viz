import vfData from "./data/optsched.json";
import { vfChartBeforeData } from "./scheduleCharts";

export let unoptimisedOrderLateness = 0;
let currTime = 0;

vfChartBeforeData.forEach((order) => {
  const orderDeadline = vfData.find(
    (vfOrder) => vfOrder.order_number === order.label
  )["dead_line"];
  currTime += Number(order.data);
  const orderLateness = currTime - orderDeadline;
  if (orderLateness > 0) unoptimisedOrderLateness += orderLateness;
  // dont negate lateness for early orders
});

export function sumLateness(vfData) {
  // dont negate lateness for early orders
  return vfData.reduce((prev, curr) => {
    if (!curr["tardiness_flag"]) {
      return prev + curr["tardiness_duration"];
    }
    return prev;
  }, 0);
}
