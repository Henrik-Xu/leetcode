/**
 * Maximum Subarray
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * A subarray is a contiguous part of an array.
 */
let maxSubArray = function(nums) {
  let maxEndingHere = nums[0],
    maxSoFar = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
};
