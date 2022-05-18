// version 1

var reverse = function(x) {
  let negative = x < 0 ? true : false;
  x = String(Math.abs(x)).split('').reverse().join('');
  let ans = negative ? -Number(x) : Number(x);
  // check the output range
  if (ans < -Math.pow(2, 31) || ans > Math.pow(2, 31)-1) {
    return 0;
  } else {
    return ans;
  }
};
