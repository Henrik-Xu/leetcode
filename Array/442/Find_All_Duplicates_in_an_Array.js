/**
 * Find All Duplicates in an Array
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n]
 * and each integer appears once or twice, return an array of all the integers that appears twice.
 * You must write an algorithm that runs in O(n) time and uses only constant extra space.
 */
let findDuplicates = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    } else {
      res.push(Math.abs(index + 1));
    }
  }
  return res;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let res = findDuplicates(nums);
console.log(res);
