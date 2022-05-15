/**
 * Array Partition I
 * Sa = a1+b1+a2+b2+...+an+bn
 * Sm = min(a1,b1) + min(a2,b2) + ... + min(an,bn); Sm = a1+a2+...+an;
 * di = bi - ai, sd = di + d2 + ... + dn
 * Sa = a1+b1+a2+b2+...+an+bn = a1+a1+d1+a2+a2+b2+...+an+an+dn = 2Sm + sd
 * Sm = (Sa - Sd) /2; To get the max Sm, given Sa is constant, we need to make Sd as small as possible.
 */

let arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let max = 0;
    for (let i = 0; i < nums.length; i+=2) {
        max+=nums[i];
    }
    return max;
};
let nums = [6,2,6,5,1,2];
let res = arrayPairSum(nums);
console.log(res);