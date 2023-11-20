// reference
// https://bost.ocks.org/mike/shuffle/

// version 1
// randomly pick one index from origin and add it to shuffled array
// O(n^2) runtime complexity

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.array = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.array;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let origin = [...this.array];
  let shuffled = [];

  while (origin.length > 0) {
    let index = Math.floor(Math.random() * origin.length);
    shuffled.push(origin[index]);
    origin.splice(index, 1);
  }
  return shuffled;
};

// version 2
// Fisher–Yates Shuffle (in-place shuffle)
// shuffle from the last index, pick an index and swap it with the last index
// O(n) runtime complexity

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.array = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.array;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let array = [...this.array];
  let currentIndex = array.length - 1;

  while (currentIndex > 0) {
    let ramdomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [array[currentIndex], array[ramdomIndex]] = [
      array[ramdomIndex],
      array[currentIndex],
    ];
    currentIndex--;
  }
  return array;
};
