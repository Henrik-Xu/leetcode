/**
 * Maximum Subarray
 */
let maxSubArray = function (nums) {
    let maxEndingHere = nums[0], maxSoFar = nums[0];
    for (let i = 1; i < nums.length; i++) {
      maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
};