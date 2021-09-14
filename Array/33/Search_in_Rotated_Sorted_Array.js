/**
 * Search in Rotated Sorted Array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let middle = parseInt(low + high) / 2;
    if (nums[middle] == target) return middle;
    if (nums[low] <= nums[middle]) {
      if (nums[middle] > target && nums[low] < target) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    } else {
      if (nums[middle] < target && nums[high] >= target) {
        low = middle + 1;
      } else {
        high = middle - 1;
      }
    }
  }
  return nums[low] == target ? low : -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2];
let res = search(nums, 0);
console.log(res);
