/**
 * Wiggle Sort II
 * Given an integer array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....
 * You may assume the input array always has a valid answer.
 */
let wiggleSort = function(nums) {
  let copy = [...nums];
  copy = copy.sort((a, b) => a - b);
  let n = nums.length;
  let left = Math.floor((n + 1) / 2) - 1;
  let right = n - 1;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 1) {
      nums[i] = copy[right];
      right--;
    } else {
      nums[i] = copy[left];
      left--;
    }
  }
};

let nums = [1, 5, 1, 1, 6, 4];
let res = wiggleSort(nums);
console.log(res);
