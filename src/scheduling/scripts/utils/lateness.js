import vfData from "../data/optsched.json";

export function calculateLateness(vfChartData) {
  // calculate lateness from chart data
  let unoptimisedOrderLateness = 0;
  let currTime = 0;

  vfChartData.forEach((order) => {
    const orderDeadline = vfData.find(
      (vfOrder) => vfOrder.order_number === order.label
    )["dead_line"];
    currTime += Number(order.data);
    const orderLateness = currTime - orderDeadline;
    if (orderLateness > 0) unoptimisedOrderLateness += orderLateness;
    // dont negate lateness for early orders
  });
  return unoptimisedOrderLateness;
}

export function sumLateness(vfData) {
  // calculate lateness from vf data

  return vfData.reduce((prev, curr) => {
    if (!curr["tardiness_flag"]) {
      // dont negate lateness for early orders
      return prev + curr["tardiness_duration"];
    }
    return prev;
  }, 0);
}
