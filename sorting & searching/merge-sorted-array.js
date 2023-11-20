// version 1
// put nums2 to nums1 and sort
// O(m^2 + m + n)
// note: sort number must write (a, b) => a-b
// otherwise it'll be wrong
// eg. [2, 65, 34, 2, 7, 8].sort() => [2, 2, 34, 65, 7, 8]

var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }

  nums1.sort((a, b) => a - b);
};

// version 2
// write bubble sort manually

var merge = function (nums1, m, nums2, n) {
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[i - m];
  }

  for (let i = 0; i < nums1.length - 1; i++) {
    for (let j = 0; j < nums1.length - 1; j++) {
      if (nums1[j] > nums1[j + 1]) {
        let temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
      }
    }
  }
};

// version 3
// sort from last to avoid overwrite nums1 values
// if nums2 still has nums, fill them to nums1
// otherwise merge completed

var merge = function (nums1, m, nums2, n) {
  if (n === 0) return;

  let index1 = m - 1;
  let index2 = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (index1 < 0) {
      nums1[i] = nums2[index2];
      index2--;
    }

    if (index1 >= 0 && index2 >= 0) {
      if (nums1[index1] >= nums2[index2]) {
        nums1[i] = nums1[index1];
        index1--;
      } else {
        nums1[i] = nums2[index2];
        index2--;
      }
    }
  }
};

// version 4
// cleaner way of version 3

var merge = function (nums1, m, nums2, n) {
  let last = m + n - 1;

  while (m > 0 && n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[last] = nums1[m - 1];
      m--;
    } else {
      nums1[last] = nums2[n - 1];
      n--;
    }
    last--;
  }

  while (n > 0) {
    nums1[last] = nums2[n - 1];
    n--;
    last--;
  }
};
