/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element != val && index != i) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
