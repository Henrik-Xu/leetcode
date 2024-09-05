/**
 * Factorial Trailing Zeroes
 */
var trailingZeroes = function(n) {
    let numZeroes = 0;
    for (let i = 5; i <= n; i *= 5) {
      numZeroes += Math.floor(n / i);
    }
    return numZeroes;
};
let n=25;
let res=trailingZeroes(n);
console.log(res);