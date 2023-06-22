/**
 * Search Insert Position
 */
let searchInsert = function (nums, target) {
  let low = 0, high = nums.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) return mid;
    if (nums[mid] < target) {
      if (mid + 1 >= nums.length || nums[mid + 1] > target) {
        return mid + 1;
      }
      low = mid + 1;
    } else {
      if (mid <= 0 || nums[mid - 1] < target) {
        return mid;
      }
      high = mid - 1;
    }
  }
};
let nums = [1, 3, 5, 6], target = 7;
let res = searchInsert(nums, target);
console.log(res);
