/**
 *  Calculate Money in Leetcode Bank
 */
var totalMoney = function(n) {
    let remain=n%7;
    let count=(n-remain)/7;
    let res=0;
    for (let i = 1; i <=count; i++) {
        res+=7*(i+3);
    }
    for(let i=7*count;i<n;i++){
        res+=++count;
    }
    return res;
};
let n = 10;
let res=totalMoney(n);
console.log(res);