/**
 * Maximum Product Subarray
 * Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
 * It is guaranteed that the answer will fit in a 32-bit integer.
 * A subarray is a contiguous subsequence of the array.
 */
let maxProduct = function(nums) {
  let r = nums[0];
  let max = r,
    min = r;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      [min, max] = [max, min];
    }
    max = Math.max(nums[i], max * nums[i]);
    min = Math.min(nums[i], min * nums[i]);
    r = Math.max(r, max);
  }
  return r;
};

let nums = [2, 3, 0, 2, 4];
let res = maxProduct(nums);
console.log(res);
