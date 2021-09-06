/**
 * 3Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i + 2 < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    let target = -nums[i];
    while (left < right) {
      if (nums[left] + nums[right] == target) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
      } else if (nums[left] + nums[right] > target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};

let nums = [0, 0, 0, 0];
console.log(threeSum(nums));
