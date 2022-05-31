// version 1
// use an array to keep max
// only need to consider (0 + 2~n) or (1~n)

var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  
  let maxArr = [nums[0], Math.max(nums[0], nums[1])];
  for (let i=2; i<nums.length; i++) {
    // only need to compare (0 + 2~n) and (1~n)
    let max = Math.max(nums[i] + maxArr[i-2] , maxArr[i-1]);
    maxArr.push(max);
  }
  return maxArr.pop();
};

