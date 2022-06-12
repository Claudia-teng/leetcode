// version 1
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
  s.reverse();
};

// version 2

var reverseString = function(s) {
  let time = Math.floor(s.length/2);
  for (let i=0; i<time; i++) {
    let hold = s[i];
    s[i] = s[s.length-1-i];
    s[s.length-1-i] = hold;
  }
};

// version 3

var reverseString = function(s) {
  for (let i=0; i<s.length/2; i++) {
    [s[i], s[s.length-1-i]] = [s[s.length-1-i], s[i]]
  }
};