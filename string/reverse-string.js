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
  let reversed = [];
  let arrayS = s.split('');
  for (let i=0; i<s.length; i++) {
    reversed.push(arrayS.pop());
  }
  return reversed.join('');
};

// version 4 
// recursive
// str.charAt(0) will be kept in that scope

function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}