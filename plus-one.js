// version 1
// pitfall: javascript big int handling

var plusOne = function(digits) {
  let result = BigInt(digits.join(''))+BigInt(1)
  return result.toString().split('');
};

// version 2
// for loop from last to front
// if (element !== 9)
// plus one for the last element -> return
// else (element === 9)
// element = 0, and continue loop
// if the for loop did not return any thing, it means all elements === 9 (eg, 999)
// add 1 at the front (eg, 1000)

var plusOne = function(digits) {
  for (let i=digits.length-1; i>=0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  digits.unshift(1);
  return digits;
};