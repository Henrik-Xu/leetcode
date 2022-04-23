/**
 * Time Complexity:O(t*n).Each of the n dp arrays of size has been filled just once.Here, t refers to the
 * sum of the nums array and n refers to the length of the nums array.
 * Space Complexity:O(t), Two dp arrays of size 2 * t + 1 are used.therefore space usage is O(t)
 */
let findTargetSumWays = function(nums, target) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    if(Math.abs(target)>total){
        return 0;
    }
    let dp = new Array(2*total+1).fill(0);
    dp[nums[0]+total] = 1;
    dp[-nums[0]+total] += 1;
    for (let i = 1; i < nums.length; i++) {
        let next = new Array(2*total+1).fill(0);
        for (let sum = -total; sum <= total; sum++) {
           if(dp[sum+total]>0){
               next[sum+nums[i]+total]+=dp[sum+total];
               next[sum-nums[i]+total]+=dp[sum+total];
           }
        }
        dp = next;
    }
    return dp[target+total];
};
let nums = [1,1,1,1,1],target = 3;
let res = findTargetSumWays(nums,target);
console.log(res);