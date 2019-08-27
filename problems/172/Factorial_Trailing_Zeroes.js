/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let numZeroes = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
};

let result = trailingZeroes(10);
console.log(result);

let result2 = trailingZeroes(15);
console.log(result2);
