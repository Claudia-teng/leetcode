// version 1
// use regex
// ^ -> at the start
// - | + -> - or +
// ? -> matches the previous condition 0 to 1 time (having - / + is not a must)
// \d -> matches a digit (equivalent to [0-9])
// + -> matches the previous condition as many times as possible (+8 vs +89232)

var myAtoi = function (s) {
  let num = +s.trim().match(/^(\-|\+)?\d+/g);
  if (num < -(2 ** 31)) {
    return -(2 ** 31);
  } else if (num > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else {
    return num;
  }
};

// version 2
// 1. if first letter is - or +, remember it and remove it
// 2. then the second letter must be a number, if not, return 0
// 3. add number to newS util it finds the non-digit character
// 4. handle range

// note
// use isNaN, do not use xxx === NaN
// Number(' ') -> 0

var myAtoi = function (s) {
  s = s.trim();

  // first letter - positive or negative
  let negative = false;
  if (s[0] === "+") {
    s = s.substring(1);
  } else if (s[0] === "-") {
    s = s.substring(1);
    negative = true;
  }

  // second letter - must be a number
  let newS = "";
  if (isNaN(Number(s[0]))) {
    return 0;
  } else {
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== " " && !isNaN(Number(s[i]))) {
        newS += s[i];
      } else {
        break;
      }
    }
  }

  // range
  let result = negative ? -Number(newS) : Number(newS);
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (result < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  } else {
    return result;
  }
};

// version 3
// leetcode answer

var myAtoi = function (input) {
  let sign = 1;
  let result = 0;
  let index = 0;
  let n = input.length;

  let INT_MAX = Math.pow(2, 31) - 1;
  let INT_MIN = -Math.pow(2, 31);

  // Discard all spaces from the beginning of the input string.
  while (index < n && input[index] == " ") {
    index++;
  }

  // sign = +1, if it's positive number, otherwise sign = -1.
  if (index < n && input[index] == "+") {
    sign = 1;
    index++;
  } else if (index < n && input[index] == "-") {
    sign = -1;
    index++;
  }

  // Traverse next digits of input and stop if it is not a digit.
  // End of string is also non-digit character.
  while (index < n && input[index] >= "0" && input[index] <= "9") {
    let digit = input[index] - "0";

    // Check overflow and underflow conditions.
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result == Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)
    ) {
      // If integer overflowed return 2^31-1, otherwise if underflowed return -2^31.
      return sign == 1 ? INT_MAX : INT_MIN;
    }

    // Append current digit to the result.
    result = 10 * result + digit;
    index++;
  }

  // We have formed a valid number without any overflow/underflow.
  // Return it after multiplying it with its sign.
  return sign * result;
};
