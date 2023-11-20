// version 1
// use stack
// O(a * b) runtime complexity
// use indexOf inside for loop

var isValid = function (s) {
  let stack = [];
  let left = ["(", "{", "["];
  let right = [")", "}", "]"];

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let index = left.indexOf(cur);
    if (index !== -1) {
      stack.push(right[index]);
      continue;
    }
    if (right.includes(cur)) {
      if (stack.pop() !== cur) return false;
    }
  }
  return stack.length === 0;
};

// version 2
// cleaner way of version 1

var isValid = function (s) {
  let stack = [];
  for (let cur of s) {
    if (cur === "(") stack.push(")");
    else if (cur === "{") stack.push("}");
    else if (cur === "[") stack.push("]");
    else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  return stack.length === 0;
};
