/**
 * Super Ugly Number
 */
let nthSuperUglyNumber = function(n, primes) {
  let uglys = new Array(n).fill(0);
  let idx = new Array(primes.length).fill(0);
  uglys[0] = 1;
  for (let i = 1; i < n; i++) {
    uglys[i] = Number.MAX_VALUE;
    for (let j = 0; j < primes.length; j++) {
      uglys[i] = Math.min(uglys[i], primes[j] * uglys[idx[j]]);
    }
    for (let j = 0; j < primes.length; j++) {
      while (primes[j] * uglys[idx[j]] == uglys[i]) {
        idx[j]++;
      }
    }
  }
  return uglys[n - 1];
};
let n = 12,
  primes = [2, 7, 13, 19];
let res = nthSuperUglyNumber(n, primes);
console.log(res);
