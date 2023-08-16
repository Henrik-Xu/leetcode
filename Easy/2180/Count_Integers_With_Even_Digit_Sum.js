/**
 * Count Integers With Even Digit Sum
 */
var countEven = function(num) {
    let sum = 0, tmp = num;
    while (num>0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return Math.floor((tmp - sum % 2) / 2);
};
let num=30;
let res=countEven(num);
console.log(res);