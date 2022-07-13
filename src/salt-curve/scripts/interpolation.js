function linearInterpolate(yVal, point1, point2) {
  // interpolare x val from y

  const [x1, y1] = point1;
  const [x2, y2] = point2;
  const slope = (y2 - y1) / (x2 - x1);
  // solve for x approximating gradient as linear
  // rearrange slope eqn.
  // i.e. (yVal - y1) / (xVal - x1) == slope

  const xVal = (yVal - y1) / slope + x1;
  return xVal;
}

function findSurroundingValues(datapoint, dataset) {
  // return [higher, lower] values in dataset array either side of datapoint

  // copy array and sort
  const sortedDataset = dataset.slice(0).sort((a, b) => a - b);

  // cant use forEach to return
  for (let i = 0; i < sortedDataset.length; i++) {
    if (sortedDataset[i] >= datapoint) {
      const higherVal = sortedDataset[i];
      const lowerVal = sortedDataset[i - 1];
      return [higherVal, lowerVal];
    }
  }
}

function getSurroundingPoints(yVal, yDataset, xDataset) {
  // get [higherPoint, lowerPoint] surrounding yVal

  // get surrounding yvalues
  const [y2, y1] = findSurroundingValues(yVal, yDataset);
  // get idx of yVals
  const y2Idx = yDataset.indexOf(y2);
  const y1Idx = yDataset.indexOf(y1);
  // find corresponding xVals
  const x1 = xDataset[y1Idx];
  const x2 = xDataset[y2Idx];
  const point1 = [x1, y1];
  const point2 = [x2, y2];
  return [point2, point1];
}

export function calculateConcentration(
  viscosity,
  viscosityDataset,
  concentrationDataset
) {
  const [point2, point1] = getSurroundingPoints(
    viscosity,
    viscosityDataset,
    concentrationDataset
  );
  const xVal = linearInterpolate(viscosity, point1, point2);
  return xVal;
}
