/**
 * Sum of Digits in Base K
 */
var sumBase = function(n, k) {
    let sum = 0;
    while (n > 0) {
        sum += n % k;
        n = Math.floor(n / k);;
    }
    return sum;
};
let n = 34, k = 6;
let res=sumBase(n,k);
console.log(res);