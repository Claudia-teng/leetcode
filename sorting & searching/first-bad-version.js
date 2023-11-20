// version 1
// recursion

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (n === 1) return 1;
    return helper(1, n);

    function helper(min, max) {
      if (max <= min) return min;

      let mid = Math.floor((min + max) / 2);
      if (isBadVersion(mid)) {
        return helper(min, mid); // do not write mid-1 cause it'll remove the ans!!
      } else {
        return helper(mid + 1, max);
      }
    }
  };
};

// version 2
// iterative

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let min = 0;
    let max = n;

    while (min < max) {
      let mid = Math.floor((min + max) / 2);
      if (isBadVersion(mid)) {
        max = mid;
      } else {
        min = mid + 1;
      }
    }
    return min;
  };
};
