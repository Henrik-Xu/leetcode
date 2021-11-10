/**
 * Minimum Size Subarray Sum
 * Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n))
 */
let minSubArrayLen = function(target, nums) {
  let n = nums.length,
    ans = Number.MAX_VALUE;
  let sum = 0,
    left = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    while (sum >= target) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left];
      left++;
    }
  }
  return ans == Number.MAX_VALUE ? 0 : ans;
};
let target = 11,
  nums = [1, 1, 1, 1, 1, 1, 1, 1];
let res = minSubArrayLen(target, nums);
console.log(res);
