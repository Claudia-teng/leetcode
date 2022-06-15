// version 1
// use hash table to save key(num): value(count)
// need to handle handle different lengths of s and t -> check if any value is not 0

var isAnagram = function(s, t) {
  let ht = {}
  for (let i=0; i<s.length; i++) {
    if (!ht[s[i]]) {
      ht[s[i]] = 1;
    } else {
      ht[s[i]]++;
    }
  }
  
  for (let i=0; i<t.length; i++) {
    if (!ht[t[i]]) {
      return false;
    } else {
      ht[t[i]]--;
    }
  }
  
  return Object.values(ht).find(num => num !== 0) ? false : true;
};

// version 2
// handle different lengths of s and t first

var isAnagram = function(s, t) {
  let ht = {}
  if (s.length !== t.length ) return false;
  
  for (let i=0; i<s.length; i++) {
    if (!ht[s[i]]) {
      ht[s[i]] = 1;
    } else {
      ht[s[i]]++;
    }
  }
  
  for (let i=0; i<t.length; i++) {
    if (!ht[t[i]]) {
      return false;
    } else {
      ht[t[i]]--;
    }
  }
  return true;
};

// version 3
// sorting
// 1. check lengths
// 2. sort and compare

var isAnagram = function(s, t) {
  if(s.length != t.length) return false;

  var s = s.split("").sort().join("");
  var t = t.split("").sort().join("");

  return s === t;
};

