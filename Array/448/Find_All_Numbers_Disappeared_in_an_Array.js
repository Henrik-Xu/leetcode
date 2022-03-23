/**
 * Find All Numbers Disappeared in an Array
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not appear in nums.
 */
let findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1);
    }
  }
  return res;
};
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let res = findDisappearedNumbers(nums);
console.log(res);
