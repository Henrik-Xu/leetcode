/**
 * Time Complexity : O(n^2)
 * Time Limit Exceed
 */
var countPrimes = function(n) {
  let result = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      result++;
    }
  }
  return result;
};

let isPrime = function(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let result = countPrimes(499979);
console.log(result);
