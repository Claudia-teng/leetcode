// version 1

var reverse = function (x) {
  let negative = x < 0 ? true : false;
  x = String(Math.abs(x)).split("").reverse().join("");
  let ans = negative ? -Number(x) : Number(x);
  // check the output range
  if (ans < -Math.pow(2, 31) || ans > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    return ans;
  }
};

// version 2
// use number

var reverse = function (x) {
  let ans = 0;
  let negative = false;
  if (x < 0) {
    negative = true;
    x = Math.abs(x);
  }
  while (x > 0) {
    ans = ans * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31)) {
    return 0;
  }
  return negative ? -ans : ans;
};
