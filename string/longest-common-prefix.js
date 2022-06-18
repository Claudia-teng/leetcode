// version 1
// use the first word as sample, then compare every letter
// O(n^2) runtime complexity

var longestCommonPrefix = function(strs) {
  let first = strs[0];
  for (let i=0; i<first.length; i++) {
    let letter = first[i];
    for (let j=0; j<strs.length; j++) {
      if (strs[j][i] !== letter) {
        return first.substring(0, i);
      }
    }
  }
  return first;
};

// version 2
// find the min length, only loop min length times
// use the first word as sample, then compare every letter
// if the letter passes, add to prefix (to replace substring in v1)
// O(n^2) runtime complexity

var longestCommonPrefix = function(strs) {
  let prefix = '';
  
  let minLength = strs[0].length;
  for (let i=1; i<strs.length; i++) {
    minLength = Math.min(minLength, strs[i].length);
  }
  
  for (let i=0; i<minLength; i++) {
    let current = strs[0][i];
    for (let j=1; j<strs.length; j++) {
      if (strs[j][i] !== current) {
        return prefix;
      }
    }
    prefix += current;
  }
  return prefix;
};