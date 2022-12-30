/**
 * Longest Continuous Increasing Subsequence
 */
let findLengthOfLCIS = function (nums) {
  let ans = 0, anchor = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] >= nums[i]) {
      anchor = i;
    }
    ans = Math.max(ans, i - anchor + 1);
  }
  return ans;
};
let nums = [2, 2, 2, 2, 2];
let res = findLengthOfLCIS(nums);
console.log(res);
