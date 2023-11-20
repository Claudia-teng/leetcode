// version 1
// use substring() to compare

var strStr = function (haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let subStr = haystack.substring(i, i + needle.length);
      if (subStr === needle) return i;
    }
  }
  return -1;
};

// version 2

var strStr = function (haystack, needle) {
  if (!needle) return 0;

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j === needle.length - 1) return i;
    }
  }

  return -1;
};
