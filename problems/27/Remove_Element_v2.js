/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * case : when the array contains few elements to remove
 */
var removeElement = function(nums, val) {
  let index = 0;
  let length = nums.length;
  while (index < length) {
    if (nums[index] == val) {
      nums[length] = nums[index];
      length--;
    } else {
      index++;
    }
  }
  return index;
};
