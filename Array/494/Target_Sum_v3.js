/**
 * Time Complexity: O(t*n), the dp array of size O(t*n) has been just filled just once. Here, t refer to the sum
 * of the nums array n refere to the length of the nums array.
 * Sapce Complexity: O(t*n), dp array of size t * n is used.
 */
let findTargetSumWays = function(nums, target) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    if(Math.abs(target)>total){
        return 0;
    }
    let dp = new Array(nums.length).fill(0).map(()=>new Array(2*total+1).fill(0));
    dp[0][nums[0]+total] = 1;
    dp[0][-nums[0]+total] += 1;
    for (let i = 1; i < nums.length; i++) {
        for (let sum = -total; sum <= total; sum++) {
            if(dp[i-1][sum+total]>0){
                dp[i][sum+nums[i]+total]+=dp[i-1][sum+total];
                dp[i][sum-nums[i]+total]+=dp[i-1][sum+total];
            }
        }
    }
    return dp[nums.length-1][target+total];
};
let nums = [1,1,1,1,1],target = 3;
let res = findTargetSumWays(nums,target);
console.log(res);