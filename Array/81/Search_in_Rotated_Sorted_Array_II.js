/**
 * Search in Rotated Sorted Array II
 * There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
 */
let search = function(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] == target) return true;
    if (nums[low] == nums[middle] && nums[middle] == nums[high]) {
      low++;
      high--;
      continue;
    }
    if (nums[low] <= nums[middle]) {
      if (target >= nums[low] && target < nums[middle]) {
        high = middle - 1;
      } else {
        low = middle + 1;
      }
    } else {
      if (target > nums[middle] && target <= nums[high]) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
  }
  return false;
};

let nums = [3, 1],
  target = 1;
let res = search(nums, target);
console.log(res);
