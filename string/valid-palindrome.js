// version 1
// use regex to filter non-alphanumeric characters
// ^ -> not
// i -> insensitive case
// g -> global

var isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (s === s.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

// version 2
// use charCodeAt() to filter non-alphanumeric characters

var isPalindrome = function (s) {
  s = s.toLowerCase();

  let aCode = "a".charCodeAt();
  let zCode = "z".charCodeAt();
  let zeroCode = "0".charCodeAt();
  let nineCode = "9".charCodeAt();

  let newS = "";
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= aCode && s.charCodeAt(i) <= zCode) {
      newS += s[i];
    } else if (s.charCodeAt(i) >= zeroCode && s.charCodeAt(i) <= nineCode) {
      newS += s[i];
    }
  }

  let revNewS = newS.split("").reverse().join("");
  if (revNewS === newS) {
    return true;
  } else {
    return false;
  }
};
