/**
 * Time Complexity : O(n1.5)
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
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

let result = countPrimes(10);
console.log(result);
