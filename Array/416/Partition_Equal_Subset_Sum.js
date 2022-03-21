/**
 * Partition Equal Subset Sum
 * Given a non-empty array nums containing only positive integers,find if the array
 * can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 */
let canPartition = function(nums) {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  if (sum & (1 == 1)) {
    return false;
  }
  sum /= 2;
  let dp = new Array(sum + 1).fill(false);
  dp[0] = true;
  for (const num of nums) {
    for (let i = sum; i > 0; i--) {
      if (i >= num) {
        dp[i] = dp[i] || dp[i - num];
      }
    }
  }
  return dp[sum];
};
let nums = [1, 2, 3, 5];
let res = canPartition(nums);
console.log(res);
