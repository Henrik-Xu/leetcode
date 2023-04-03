/**
 * Number of Subarrays with Bounded Maximum
 */
let numSubarrayBoundedMax = function (nums, left, right) {
  return count(nums, right) - count(nums, left - 1);
};
let count = function (nums, bound) {
  let ans = 0, cnt = 0;
  for (const num of nums) {
    cnt = num <= bound ? cnt + 1 : 0;
    ans += cnt;
  }
  return ans;
}
let nums = [2, 1, 4, 3], left = 2, right = 3;
let res = numSubarrayBoundedMax(nums, left, right);
console.log(res);
