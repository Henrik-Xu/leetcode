/**
 * Combination Sum IV
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 */
let combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  let helper = function(remain) {
    if (dp[remain] != 0) {
      return dp[remain];
    }
    let res = 0;
    for (const num of nums) {
      if (remain >= num) {
        res += helper(remain - num);
      }
    }
    dp[remain] = res;
    return res;
  };
  return helper(target);
};
let nums = [1, 2, 3],
  target = 4;
let res = combinationSum4(nums, target);
console.log(res);
