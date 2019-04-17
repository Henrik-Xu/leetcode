/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let index = nums.indexOf(target);

  if (index == -1) {
    let length = nums.length;
    if (target < nums[0]) return 0;
    if (target > nums[length - 1]) return length;
    for (let i = 1; i < length; i++) {
      const element = nums[i];
      if (nums[i - 1] < target && target < element) {
        return i;
      }
    }
  }
  return index;
};
