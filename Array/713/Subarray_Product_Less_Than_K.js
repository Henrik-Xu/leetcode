/**
 * Subarray Product Less Than K
 * Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
 */
let numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;
  let left = 0, right = 1;
  let prod = nums[0], ans = 0;
  if (prod < k) ans++;
  while (right != nums.length) {
    let val = nums[right];
    prod *= val;
    while (prod >= k) {
      prod /= nums[left];
      left++;
    }
    ans += right - left + 1;
    right++;
  }
  return ans;
};
let nums = [10, 5, 2, 6], k = 100;
let res = numSubarrayProductLessThanK(nums, k);
console.log(res);
