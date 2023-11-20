// version 1
// O(log3 n) runtime complexity
// 1 is also power of 3 (3 ** 0)

var isPowerOfThree = function (n) {
  while (n >= 3) {
    if (n % 3 !== 0) return false;
    n = n / 3;
  }
  return n === 1 ? true : false;
};
