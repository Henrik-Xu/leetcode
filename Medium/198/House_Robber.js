/**
 * House Robber
 */

/**
 * Approach 1. recrusive + memo
 */
var rob = function(nums) {
    let n=nums.length;
    let memo=new Map();
    let recrusive=function(n) {
        if(n<0){
            return 0;
        }
        if(memo.has(n)){
            return memo.get(n);
        }
        let one=recrusive(n-2)+nums[n];
        let two=recrusive(n-1);
        let result=Math.max(one,two);
        memo.set(n,result);
        return result;
    }
    return recrusive(n-1);
};

var rob2 = function(nums) {
    let prev1=0;
    let prev2=0;
    for (let i = 0; i < nums.length; i++) {
        let temp=prev1;
        prev1=Math.max(prev1,nums[i]+prev2);
        prev2=temp;
    }
    return prev1;
};
let nums = [1,2,3,1];
let res=rob2(nums);
console.log(res);