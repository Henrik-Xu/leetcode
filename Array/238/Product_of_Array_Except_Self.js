/**
 * Product of Array Except Self
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */
let productExceptSelf = function(nums) {
  let n = nums.length;
  let res = new Array(n).fill(1),
    right = 1;
  for (let i = 0; i < n; i++) {
    if (i == 0) continue;
    res[i] = res[i - 1] * nums[i - 1];
  }
  for (let i = n - 1; i >= 0; i--) {
    if (i == n - 1) continue;
    right *= nums[i + 1];
    res[i] *= right;
  }
  return res;
};
let nums = [1, 2, 3, 4];
let res = productExceptSelf(nums);
console.log(res);
