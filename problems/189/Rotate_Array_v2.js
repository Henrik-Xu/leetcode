/*Given an array, rotate the array to the right by k steps, where k is non-negative. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k, k));

  return nums;
};

let result = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);
