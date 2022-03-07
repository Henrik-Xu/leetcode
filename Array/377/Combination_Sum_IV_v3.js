/**
 * Combination Sum IV
 * Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.
 * The test cases are generated so that the answer can fit in a 32-bit integer.
 */
let combinationSum4 = function(nums, target) {
  let count = new Array(target + 1).fill(0);
  count[0] = 1;
  for (let i = 1; i < count.length; i++) {
    for (const num of nums) {
      if (i >= num) {
        count[i] += count[i - num];
      }
    }
  }
  return count[target];
};
let nums = [1, 2, 3],
  target = 4;
let res = combinationSum4(nums, target);
console.log(res);
