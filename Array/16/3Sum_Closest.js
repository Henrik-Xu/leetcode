/**
 * 3Sum Closest
 * Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers.
 * You may assume that each input would have exactly one solution.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let min = Number.MAX_VALUE,
    res = 0;
  for (let i = 0; i + 2 < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    if (nums[i] + nums[left] + nums[right] == target) {
      return target;
    } else {
      let distance = nums[i] + nums[left] + nums[right] - target;
      if (min > Math.abs(distance)) {
        min = Math.abs(distance);
        res = nums[i] + nums[left] + nums[right];
      }
      if (distance > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
