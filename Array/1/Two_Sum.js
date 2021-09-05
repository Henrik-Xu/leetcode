/**
 * Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  if (nums.length == 0) return;
  let map = new Map();
  map.set(nums[0], 0);
  for (let i = 1; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
