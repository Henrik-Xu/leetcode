/**
 * Move Zeroes
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 */
let moveZeroes = function(nums) {
  for (let index = 0, current = 0; current < nums.length; current++) {
    if (nums[current] != 0) {
      [nums[index], nums[current]] = [nums[current], nums[index]];
      index++;
    }
  }
  console.log(nums);
};
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
