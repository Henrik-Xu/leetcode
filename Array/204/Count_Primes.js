/**
 * Count Primes
 * Given an integer n, return the number of prime numbers that are strictly less than n.
 */
let countPrimes = function(n) {
  if (n <= 0) return 0;
  let notPrimes = new Array(n + 1).fill(false);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!notPrimes[i]) {
      count++;
      for (let j = 2; i * j < n; j++) {
        notPrimes[i * j] = true;
      }
    }
  }
  return count;
};

let n = 2;
let res = countPrimes(n);
console.log(res);
