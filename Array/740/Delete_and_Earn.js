/**
 * Delete and Earn
 */
let deleteAndEarn = function(nums) {
   let max =0;
   for (const num of nums) {
    max=Math.max(num,max);
   }
   let dp=new Array(max+1).fill(0);
   for (const num of nums) {
    dp[num]+=num;
   }
   let prev1=0,prev2=0;
   for (const num of dp) {
    let temp=prev1;
    prev1=Math.max(prev2+num,prev1);
    prev2=temp;
   }
   return prev1;
};
let nums = [2,2,3,3,3,4];
let res = deleteAndEarn(nums);
console.log(res);