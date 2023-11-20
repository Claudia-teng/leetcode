// version 1

var hammingDistance = function (x, y) {
  let binaryX = x.toString(2);
  let binaryY = y.toString(2);
  let maxLen = Math.max(binaryX.length, binaryY.length);
  let count = 0;

  binaryX = binaryX.padStart(maxLen, "0");
  binaryY = binaryY.padStart(maxLen, "0");

  for (let i = 0; i < maxLen; i++) {
    if (binaryX[i] !== binaryY[i]) {
      count++;
    }
  }

  return count;
};
