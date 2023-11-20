// version 1
// O(n^2) runtime complexity

var intersection = function (nums1, nums2) {
  let ans = new Set();

  for (let i = 0; i < nums1.length; i++) {
    let num = nums1[i];
    if (nums2.indexOf(num) !== -1) {
      ans.add(num);
    }
  }
  return Array.from(ans);
};

// version 2
// use for...of to iterate Set
// can not use unique1[i], it will be undefined
// O(n) runtime complexity

var intersection = function (nums1, nums2) {
  let unique1 = new Set(nums1);
  let unique2 = new Set(nums2);
  let ans = [];
  for (let num of unique1) {
    if (unique2.has(num)) {
      ans.push(num);
    }
  }
  return ans;
};
