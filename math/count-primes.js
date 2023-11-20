// version 1
// 1. for (let i=2; i<=num/2; i++)
// number must not be divisible by any number > n / 2
// time limit exceeds
// 2. for (let i=2; i*i<=num; i++)
// if n is divisible by some number p, then n = p × q and since p ≤ q, we could derive that p ≤ √n
// avoid expensive function sqrt(), so use i*i<=num
// time limit exceeds

var countPrimes = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 0;
  let count = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) count++;
  }

  function isPrime(num) {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return count;
};

// version 2
// Sieve of Eratosthenes
// 2 -> mark off all multiples of 2
// 3 -> mark off all multiples of 3
// 5 -> mark off all multiples of 5
// ignore 5 * 2 / 5 * 3 as there are already marked off before
// so can be sure that j start from i*i
// O(n log (log n))  runtime complexity
// O(n) space complexity

var countPrimes = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 0;

  // make an array to keep track of every number's status
  let isPrimeArr = new Array(n).fill(true);

  // similar to version 1 (2.)
  for (let i = 2; i * i < n; i++) {
    // if num is marked off, ignore it
    if (!isPrimeArr[i]) continue;
    // start from i*i, and mark off all multiples of i
    for (let j = i * i; j < n; j = j + i) {
      isPrimeArr[j] = false;
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimeArr[i]) count++;
  }
  return count;
};
