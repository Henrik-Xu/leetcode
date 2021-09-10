/**
 * Remove Element
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let i = 0;
  for (const n of nums) {
    if (n == val) {
      nums[i] = n;
      i++;
    }
  }
  return i;
};
