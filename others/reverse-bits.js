// version 1
// use .padStart() to make binary number's length to 32

var reverseBits = function(n) {
  let reverseS = n.toString(2).padStart(32, "0").split("").reverse().join("")
  return Number.parseInt(reverseS, 2);
};
