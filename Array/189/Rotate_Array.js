/**
 * Rotate Array
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Follow up:
 * Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
 * Could you do it in-place with O(1) extra space?
 */
let rotate = function(nums, k) {
  let reverse = function(low, high) {
    while (low < high) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
      high--;
    }
  };
  k %= nums.length;
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};
let nums = [1, 2],
  k = 3;
let res = rotate(nums, k);
console.log(res);
