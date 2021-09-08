/**
 * 4Sum
 * Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
 * 0 <= a, b, c, d < n
 * a, b, c, and d are distinct.
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 0; i + 3 < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j + 2 < nums.length; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) {
        continue;
      }
      let three = j + 1,
        four = nums.length - 1;
      while (three < four) {
        let sum = nums[i] + nums[j] + nums[three] + nums[four];
        if (sum == target) {
          res.push([nums[i], nums[j], nums[three], nums[four]]);
          three++;
          four--;
          while (three < four && nums[three] == nums[three - 1]) {
            three++;
          }
          while (three < four && nums[four] == nums[four - 1]) {
            four--;
          }
        } else if (sum > target) {
          four--;
        } else {
          three++;
        }
      }
    }
  }
  return res;
};

let nums = [1, 0, -1, 0, -2, 2];
let res = fourSum(nums, 0);
