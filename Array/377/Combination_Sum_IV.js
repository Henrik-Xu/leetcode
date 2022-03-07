/**
 * Combination Sum IV
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 */
let combinationSum4 = function(nums, target) {
  if (target == 0) {
    return 1;
  }
  let res = 0;
  for (const num of nums) {
    if (target >= num) {
      res += combinationSum4(nums, target - num);
    }
  }
  return res;
};
let nums = [1, 2, 3],
  target = 4;
let res = combinationSum4(nums, target);
console.log(res);
