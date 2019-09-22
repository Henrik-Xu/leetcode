/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n <= 0) return false;

  let map = new Map();
  while (n !== 1 && !map.has(n)) {
    map.set(n, true);
    n = calculateSum(n);
  }
  return n === 1 ? true : false;
};

let calculateSum = function(n) {
  return n
    .toString()
    .split("")
    .reduce(function(acc, cur) {
      return acc + Math.pow(cur, 2);
    }, 0);
};

let result = isHappy(82);
