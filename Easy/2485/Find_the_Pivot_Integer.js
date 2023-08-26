/**
 * Find the Pivot Integer
 */
var pivotInteger = function(n) {
    let sum=0;
    for (let i = 1; i <= n; i++) {
       sum+=i;
    }
    let partSum=0;
    for (let i = 1; i <= n; i++) { 
        if(partSum==sum-partSum-i){
            return i;
        }
        partSum+=i;
    }
    return -1;
};
let n = 8;
let res=pivotInteger(n);
console.log(res);