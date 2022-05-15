// version 1
// iterate num1
// iterate num2
// when same num is found: push to ans array & remove from nums2copy array
// O(n^2) runtime complexity

var intersect = function(nums1, nums2) {
  let nums2copy = [...nums2];
  let ans = [];
  for (let i=0; i<nums1.length; i++) {
    for (let j=0; j<nums2copy.length;) {
      if(nums1[i] === nums2copy[j]) {
        ans.push(nums1[i]);
        nums2copy.splice(j, 1);
        break;
      } else {
        j++;
      }
    }
  }
  return ans;
};

// version 2
// cleaner way of version 1
// O(n^2) runtime complexity

var intersect = function(nums1, nums2) {
  let ans = [];
  nums1.forEach(num => {
    if (nums2.indexOf(num) !== -1) {
      ans.push(num);
      nums2.splice(nums2.indexOf(num), 1)
    }
  })
  return ans;
};

// version 3
// use hash table to save num1
// key(num): value(count)
// iterate nums2, when same num is found: push to ans & minus count 
// O(n) runtime complexity

var intersect = function(nums1, nums2) {
  let ht = {};
  let ans = [];
  
  for (let num of nums1) {
    ht[num] = ht[num] ? ht[num] + 1 : 1;
  }
  
  for (let num of nums2) {
    if(ht[num]) {
      ht[num]--;
      ans.push(num);
    }
  }
  return ans;
};