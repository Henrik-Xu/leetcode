/*Given an array, rotate the array to the right by k steps, where k is non-negative. */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Complexity Analysis
 *    Time Complexity: O(n) n element are reversed a total of three times.
 *    Space Complexity: O(1).No extra space is used.
 */
let rotate = function(nums, k) {
  let reverse = function(nums, start, end) {
    while (start < end) {
      let temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };

  k %= nums.length;
  reverse(nums, 0, nums.length - 1);

  reverse(nums, 0, k - 1);

  reverse(nums, k, nums.length - 1);

  return nums;
};

let result = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);
