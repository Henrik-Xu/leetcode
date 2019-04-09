/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    const element = nums[i];
    if (element != nums[i - 1]) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
