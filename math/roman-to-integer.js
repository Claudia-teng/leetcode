// version 1

var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "I":
        if (s[i + 1] === "V" || s[i + 1] === "X") {
          ans -= map[s[i]];
        } else {
          ans += map[s[i]];
        }
        break;
      case "X":
        if (s[i + 1] === "L" || s[i + 1] === "C") {
          ans -= map[s[i]];
        } else {
          ans += map[s[i]];
        }
        break;
      case "C":
        if (s[i + 1] === "D" || s[i + 1] === "M") {
          ans -= map[s[i]];
        } else {
          ans += map[s[i]];
        }
        break;
      default:
        ans += map[s[i]];
    }
  }
  return ans;
};

// version 2
// cleaner way of version 1
// find the pattern that if cur < next, ans - cur

var romanToInt = function (s) {
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let ans = 0;

  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    let next = s[i + 1];

    if (map[cur] < map[next]) {
      ans -= map[cur];
    } else {
      ans += map[cur];
    }
  }

  return ans;
};
