// version 1
// brute force
// O(n^2) runtime complexity

var twoSum = function(nums, target) {
  for (let i=0; i<nums.length-1; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// version 2
// use hash table to save key(num): value(index)
// check if goal num is in the hash map
// & check the goal num is itself (by index) (can not use a num twice)
// O(n) runtime complexity

var twoSum = function(nums, target) {
  let myMap = new Map();
  for (let i=0; i<nums.length; i++) {
    myMap.set(nums[i], i);
  }
  for (let i=0; i<nums.length; i++) {
    let goal = target - nums[i];
    if (myMap.has(goal) && myMap.get(goal) !== i) {
      return [myMap.get(goal), i];
    }
  }
}

// Note 1:
// I use let ht = {} first to create a hash table
// but have problems with saving index 0 (which will turn ht[nums[i]] to false)
// if i save the index with string type
// it'll have problems comparing i index (type number) & ht[nums[i]] (type string) with !== strict equal

// Note 2:
// wrong condition when input is ([3, 3], 6)
// for (let i=0; i<nums.length; i++) {
//   if (map.get(nums[i]) !== map.get(target-nums[i])) {
//     return [map.get(nums[i]), map.get(target-nums[i])];
//   }
// }

// version 3
// check if the goal num is in the hash table
// no -> save in hash table key(num): value(index)
// yes -> return indices
// O(n) runtime complexity

var twoSum = function(nums, target) {
  let ht = {};
  for (let i=0; i<nums.length; i++) {
    let goal = target-nums[i];
    if (!ht[goal]) {
      ht[nums[i]] = String(i);
    } else {
      return [ht[goal], i];
    }
  }
}
