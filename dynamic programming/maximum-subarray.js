// version 1
// O(n^2) runtime complexity
// time limit exceeds

var maxSubArray = function(nums) {
  if (nums.length === 1) return nums[0];
  let max = 0;
  for (let i=0; i<nums.length; i++) {
    let subArrSum = 0
    for (let j=i; j<nums.length; j++) {
      subArrSum = subArrSum + nums[j];
      if (subArrSum > max) {
        max = subArrSum
      }
    }
  }
  return max
};

// version 2
// O(n) runtime complexity

var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = nums[0];
  
  for (let i=1; i<nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};

// version 3
// O(n) runtime complexity
// Kadane’s Algorithm can be viewed both as a greedy and DP. 
// As we can see that we are keeping a running sum of integers and when it becomes less than 0, 
// we reset it to 0 (Greedy Part). This is because continuing with a negative sum 
// is way more worse than restarting with a new range. Now it can also be viewed as a DP, 
// at each stage we have 2 choices: Either take the current element and continue with previous sum 
// OR restart a new range. These both choices are being taken care of in the implementation.

var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  
  for (let i=0; i<nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }
    sum += nums[i];
    max = Math.max(sum, max)
  }
  return max;
};