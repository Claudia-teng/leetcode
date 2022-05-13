// version 1

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

