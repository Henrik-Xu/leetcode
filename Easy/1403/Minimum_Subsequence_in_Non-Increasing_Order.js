/**
 * Minimum Subsequence in Non-Increasing Order
 */
var minSubsequence = function(nums) {
    nums.sort((a,b)=>b-a);
    let sum=0;
    for (const n of nums) {
        sum+=n;
    }
    let res=[],rest=0;
    for (const n of nums) {
        rest+=n;
        sum-=n;
        if(rest>sum){
            res.push(n);
            return res;
        }
        res.push(n);
    }
    return res;
};
let nums=[4,4,7,6,7];
let res=minSubsequence(nums);
console.log(res);