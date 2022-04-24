/**
 * Predict the Winner
 */
 let PredictTheWinner = function(nums) {
    let dp = new Array(nums.length).fill(0);
    for (let start = nums.length; start >=0; start--) {
        for (let end = start; end < nums.length; end++) {
           if(start == end){
               dp[start] = nums[start];
           }else{
               let playerA = nums[start] - dp[end];
               let playerB = nums[end] - dp[end-1];
               dp[end] = Math.max(playerA,playerB);
           }
        }
    }
    return dp[nums.length-1] >= 0;
};
let nums = [1,5,233,7];
let res = PredictTheWinner(nums);
console.log(res);