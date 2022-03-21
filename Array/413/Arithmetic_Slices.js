/**
 * Arithmetic Slices
 * An integer array is called arithmetic if it consists of at least three elements
 * and if the difference between any two consecutive elements is the same.
 */
let numberOfArithmeticSlices = function(nums) {
  let curr = 0,
    sum = 0;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
      curr += 1;
      sum += curr;
    } else {
      curr = 0;
    }
  }
  return sum;
};
let nums = [1];
let res = numberOfArithmeticSlices(nums);
console.log(res);
