/**
 * Time Complexity: O(t*n), the dp array of size O(t*n) has been just filled just once. Here, t refer to the sum
 * of the nums array n refere to the length of the nums array.
 * Sapce Complexity: O(t*n), dp array of size t * n is used.
 * 
for those who find it hard to understand dp[i] += dp[i - n]
try think this way
let's start with int[][] dp = new int[nums.length][s + 1] where dp is 2-d array with dp[i][j] means number of ways to get sum j with first i elements from nums.
Then you have the transition dp[i][j] = dp[i-1][j] + dp[i][j-nums[i]], i.e. you can get the sum j either by just repeating all the ways to get sum j by using first i-1 elements, or add nums[i] on top of each way to get sum j-nums[i] using first i elements
Then you have the dp loop

 for (int i = 0; i < nums.length; i++) dp[i][0] = 1;
 for (int i = 1; i < nums.length; i++)
    //note you need to loop descending, otherwise you'll pickup duplicated partial result along the way
    for (int j = s; j >= nums[i]; j--) 
       dp[i][j] = dp[i-1][j] + dp[i][j - nums[i]]; 
 return dp[nums.length-1][s];
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
    dp[0][-nums[0]+total] += 1 ;

    for (let i = 1; i < nums.length; i++) {
        for (let sum = -total; sum <= total; sum++) {
            if(dp[i-1][sum+total] > 0){
                dp[i][sum+nums[i]+total]+=dp[i-1][sum+total];
                dp[i][sum-nums[i]+total]+=dp[i-1][sum+total];
            }
        }
    }
    return dp[nums.length-1][target+total];
}
let nums = [1,1,1,1,1],target = 3;
let res = findTargetSumWays(nums,target);
console.log(res);