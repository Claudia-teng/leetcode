// version 1
// brute force
// time limit exceed
// O(n * k) runtime complexity

var rotate = function(nums, k) {
  for (let i=0; i<k; i++) {
    nums.unshift(nums.pop());
  }
};

// version 2
// O(n) both runtime & space complexity 

var rotate = function(nums, k) {
  let example = [...nums];
  let len = nums.length;
  for (let i=0; i<len; i++) {
    let index = (i+k)%len;
    nums[index] = example[i];
  }
};

// version 3
// O(n) runtime complexity & O(1) space complexity

var rotate= function(nums, k) {

  function reverse(arr, start, end) {
    while (start < end) {
      // destructuring Assignment
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  // reverse the entire array
  reverse(nums, 0, (nums.length - 1));
  // reverse from nums[0] to k
  reverse(nums, 0, (k - 1));
  // reverse from k to the end
  reverse(nums, k, (nums.length - 1));

  return nums;
}