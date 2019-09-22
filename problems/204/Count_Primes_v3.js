/**
 * Time Complexity : O(n1.5)
 */
var countPrimes = function(n) {
  let map = new Map();

  for (let i = 2; i * i < n; i++) {
    for (let j = i * i; j < n; j += i) {
      map.set(j, false);
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!map.has(i)) {
      count++;
    }
  }
  return count;
};

let result = countPrimes(1500000);
console.log(result);
