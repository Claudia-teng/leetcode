// version 1
// O(n) both runtime & space complexity
// bottom to top

var climbStairs = function (n) {
  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr[n - 1];
};

// version 2
// without saving the entire array
// O(n) runtime complexity
// O(1) runtime complexity

var climbStairs = function (n) {
  let one = 1;
  let two = 2;
  if (n === 1) return one;

  for (let i = 2; i < n; i++) {
    const temp = two;
    two = one + two;
    one = temp;
  }
  return two;
};

// version 3
// recursion
// top bottom

var climbStairs = function (n) {
  let map = {
    1: 1,
    2: 2,
  };

  function fib(n) {
    if (map[n]) {
      return map[n];
    } else {
      return (map[n] = fib(n - 1) + fib(n - 2));
    }
  }

  return fib(n);
};
