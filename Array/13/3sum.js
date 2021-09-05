/**
 * 3Sum
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
  if (nums.length < 3) return [];
  let arr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let one = nums[i];
    let map = new Map();
    map.set(nums[i + 1], i + 1);
    for (let j = i + 2; j < nums.length; j++) {
      let target = -(one + nums[i + 1]);
      if (map.has(-(nums[j] + one))) {
        arr.push([one, nums[i + 1], j]);
      }
    }
  }
  return arr;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
