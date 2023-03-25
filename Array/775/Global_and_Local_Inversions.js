/**
 * Global and Local Inversions
 */
let isIdealPermutation = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    max = Math.max(max, nums[i]);
    if (max > nums[i + 2]) {
      return false;
    }
  }
  return true;
};
let nums = [1, 2, 0];
let res = isIdealPermutation(nums);
console.log(res);
