// version 1
// O(n^2) runtime complexity
// O(1) space complexity
var missingNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i)) return i;
  }
  return nums.length;
};

// version 2
// O(n) runtime complexity
// O(n) space complexity

var missingNumber = function (nums) {
  // or
  // let max = nums.length;
  // the max value is actually nums.length
  let max = Math.max(...nums);

  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = true;
  }
  for (let i = 0; i <= max; i++) {
    if (!map[i]) return i;
  }
};

// version 3
// totalSum - actualSum is the answer
// O(n) runtime complexity
// O(1) space complexity

var missingNumber = function (nums) {
  let totalSum = 0;
  for (let i = 0; i <= nums.length; i++) {
    totalSum += i;
  }
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }
  return totalSum - actualSum;
};
