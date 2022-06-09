// version 1
// remove itself and compare with the rest of the array
// O(n^2) runtime complexity

var singleNumber = function(nums) {
  let ans;
  nums.forEach((num, index, array) => {
    let newA = [...array];
    newA.splice(index, 1);
    if (newA.indexOf(num) === -1) ans = num;
  });
  return ans;
};


// version 2
// O(n^2) runtime complexity

var singleNumber = function(nums) {
  for (let i=0; i<nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
      return nums[i];
    }
  }
};

// version 3
// use hash table to keep track of how many times a value has appeared
// key(num): value(count)
// return the one that only shows once
// O(n) runtime complexity

var singleNumber = function(nums) {
  let myMap = {};
  for (let i=0; i<nums.length; i++) {
    if (!myMap[nums[i]]) {
      myMap[nums[i]] = 1;
    } else {
      myMap[nums[i]]++;
    }
  }
  
  return Object.keys(myMap).find(key => myMap[key] === 1);
};