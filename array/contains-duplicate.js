// version 1
// new Set()

var containsDuplicate = function (nums) {
  return new Set(nums).size !== nums.length ? true : false;
};

// version 2
// forEach
// O(n^2) runtime complexity
// O(1) space complexity

var containsDuplicate = function (nums) {
  let ans = false;
  nums.forEach((num, index, array) => {
    if (array.indexOf(num) !== index) ans = true;
  });
  return ans;
};

// version 3
// for loop
// O(n^2) runtime complexity
// O(1) space complexity

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// version 3
// for loop
// O(n) runtime complexity
// O(n) space complexity

var containsDuplicate = function (nums) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (!map[num]) {
      map[num] = true;
    } else {
      return true;
    }
  }
  return false;
};
