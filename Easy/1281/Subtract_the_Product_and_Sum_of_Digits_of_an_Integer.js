/**
 * Subtract the Product and Sum of Digits of an Integer
 */
var subtractProductAndSum = function (n) {
    let sum = 0, product = 1;
    while (n > 0) {
        sum += n % 10;
        product *= n % 10;
        n=Math.floor(n/10);
    }
    return product - sum;
};
let n=234;
let res=subtractProductAndSum(n);
console.log(res);