// version 1
// handle small & big arrays
// iterate num1
// iterate num2
// when same num is found: remove from nums2copy array & push to ans array
// O(a*b) runtime complexity

var intersect = function(nums1, nums2) {
  let ans = [];
  for (let i=0; i<nums1.length; i++) {
    let num = nums1[i];
    let index = array.indexOf(num);
    if (index !== -1) {
      nums2.splice(index, 1);
      ans.push(num);
    }
  }
  return ans;
};

// version 2
// use hash table to save num1
// key(num): value(count)
// iterate nums2, when same num is found: push to ans & minus count 
// O(a+b) runtime complexity
// O(min(a, b)) runtime complexity

var intersect = function(nums1, nums2) {
  let store, array;
  if(nums1.length > nums2.length){
    store = nums1;
    array = nums2;
  } else {
    store = nums2;
    array = nums1;       
  }

  let ht = {};
  let ans = [];
  
  for (let num of store) {
    ht[num] = ht[num] ? ht[num] + 1 : 1;
  }
  
  for (let num of array) {
    if(ht[num]) {
      ht[num]--;
      ans.push(num);
    }
  }
  return ans;
};

// version 3
// if nums1, nums2 are sorted
// two pointers
// === -> p1 + 1, p2 + 1, push
// p1 > p2 -> p2 + 1
// p1 < p2 -> p1 + 1

var intersect = function(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a-b);
  nums2 = nums2.sort((a, b) => a-b);
  
  let p1 = 0;
  let p2 = 0;
  let ans = []
  while(p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      ans.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return ans;
};

