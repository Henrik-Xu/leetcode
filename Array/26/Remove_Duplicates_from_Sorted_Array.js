/**
 * Remove Duplicates from Sorted Array
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
  let i = nums.length > 0 ? 1 : 0;
  for (const n of nums) {
    if (n > nums[i - 1]) {
      nums[i] = n;
      i++;
    }
  }
  return i;
};
