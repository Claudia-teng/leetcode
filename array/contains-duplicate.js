// version 1
// new Set()

var containsDuplicate = function(nums) {
  return new Set(nums).size !== nums.length ? true : false;
};

// version 2
// forEach

var containsDuplicate = function(nums) {
  let ans = false
  nums.forEach((num, index, array) => {
    if (array.indexOf(num) !== index) ans = true;
  })
  return ans;
};

// version 3
// for loop

var containsDuplicate = function(nums) {
  for (let i=0; i<nums.length; i++) {
    if (nums.indexOf(nums[i]) !== i)
      return true;
  }
  return false;
};