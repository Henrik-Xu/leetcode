/**
 * Alternating Digit Sum
 */
var alternateDigitSum = function(n) {
    let res = 0, sign = 1;
    for (; n; n=Math.floor(n /10)) {
        sign *= -1;
        res += sign * n % 10;
    }
    return sign * res;
};
let n = 521;
let res=alternateDigitSum(n);
console.log(res);