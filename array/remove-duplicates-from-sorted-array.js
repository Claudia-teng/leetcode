// version 1
// O(n^2) runtime complexity

var removeDuplicates = function(nums) {
  let current;
  for (let i=0; i<nums.length;) {
    if (current !== nums[i]) {
      current = nums[i];
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// version 2
// replace "let current" to "nums[i-1]"

var removeDuplicates = function(nums) {
  for (let i=0; i<nums.length;) {
    if (nums[i-1] !== nums[i]) {
      i++;
    } else {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// version 2
// use a variable to remember the index that should be swapped
// finally index is the total of non-repeating nums
// O(n) runtime complexity

var removeDuplicates = function(nums) {
  let index = 1;
  for (let i=1; i<nums.length; i++) {
    if (nums[i] !== nums[i-1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
