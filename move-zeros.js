// version 1
// use length to fix the loop times
// use index to specify the num to be checked

var moveZeroes = function(nums) {
  let index = 0;
  const length = nums.length;
  for (let i=0; i<length; i++) {
    if (nums[index] === 0) {
      nums.splice(index, 1);
      nums.push(0);
    } else {
      index++
    }
  }
};

// version
// use the pointer to save index of first 0

var moveZeroes = function(nums) {
  let pointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (pointer !== i) {
        nums[pointer] = nums[i];
        nums[i] = 0;
      }
      pointer++;
    }
  }
};