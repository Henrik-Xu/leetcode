/**
 * Next Permutation
 * Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nextPermutation = function(nums) {
  let swap = function(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };
  let reverse = function(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  };
  let index = nums.length - 2;
  while (index >= 0 && nums[index + 1] <= nums[index]) {
    index--;
  }
  if (index >= 0) {
    let end = nums.length - 1;
    while (nums[end] <= nums[index]) {
      end--;
    }
    swap(nums, index, end);
  }
  reverse(nums, index + 1);
};

let nums = [1, 5, 1];
nextPermutation(nums);
