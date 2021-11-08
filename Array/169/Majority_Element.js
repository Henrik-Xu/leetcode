/**
 * Majority Element
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */
let majorityElement = function(nums) {
  let count = 1,
    candidate = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      candidate = nums[i];
    }
    count += nums[i] == candidate ? 1 : -1;
  }
  return candidate;
};
let nums = [2, 2, 1, 1, 1, 2, 2];
let res = majorityElement(nums);
console.log(res);
