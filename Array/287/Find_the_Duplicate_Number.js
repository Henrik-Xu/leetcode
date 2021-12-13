/**
 * Find the Duplicate Number
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * You must solve the problem without modifying the array nums and uses only constant extra space.
 */
let findDuplicate = function(nums) {
  let low = 0,
    high = nums.length - 1;
  let duplicate = -1;
  while (low <= high) {
    let cur = Math.floor((low + high) / 2);
    let count = 0;
    for (const num of nums) {
      if (num <= cur) {
        count++;
      }
    }
    if (count > cur) {
      duplicate = cur;
      high = cur - 1;
    } else {
      low = cur + 1;
    }
  }
  return duplicate;
};
let nums = [1, 3, 4, 2, 2];
let res = findDuplicate(nums);
console.log(res);
