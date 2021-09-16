/**
 *  Search_Insert_Position
 *  Given a sorted array of distinct integers and a target value, return the index if the target is found.
 *  If not, return the index where it would be if it were inserted in order
 *  You must write an algorithm with O(log n) runtime complexity.
 */

let searchInsert = function(nums, target) {
  let low = 0,
    high = nums.length - 1;
  while (low <= high) {
    let middle = parseInt((low + high) / 2);
    if (nums[middle] == target) {
      return target;
    } else if (nums[middle] < target) {
      if (middle + 1 > nums.length || nums[middle + 1] > target) {
        return middle;
      }
      low = middle + 1;
    } else {
      if (middle <= 0 || nums[middle - 1] < target) {
        return middle - 1;
      }
      high = middle - 1;
    }
  }
};
