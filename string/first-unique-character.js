// version 1
// O(n^2) runtime complexity

var firstUniqChar = function(s) {
  for (let i=0; i<s.length; i++) {
    for (let j=0; j<s.length; j++) {
      if (i === j) continue;
      if (s[i] === s[j]) break;
      if (j === s.length-1) return i;
      if (i === s.length-1 && j === s.length-2) return i;
    }
  }
  if (s.length === 1) return 0;
  return -1;
};

// version 2

var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

// version 3
// use hash table to save key(char): value(count)
// O(n) runtime complexity

var firstUniqChar = function(s) {
  let ht = {};
  for (let i=0; i<s.length; i++) {
    if (!ht[s[i]]) {
      ht[s[i]] = 1;
    } else {
      ht[s[i]]++;
    }
  }
  
  for (let i=0; i<s.length; i++) {
    if (ht[s[i]] === 1) {
      return i;
    }
  }
  return -1;
};