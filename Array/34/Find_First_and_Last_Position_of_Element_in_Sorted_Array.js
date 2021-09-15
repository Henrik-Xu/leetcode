/**
 * Find First and Last Position of Element in Sorted Array
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 */
let searchRange = function(nums, target) {
  let low = 0,
    high = nums.length - 1;
  let res = [-1, -1];
  while (low <= high) {
    let middle = parseInt((low + high) / 2);
    if (nums[middle] == target) {
      res = [middle, middle];
      let left = middle - 1,
        right = middle + 1;
      while (left >= 0 && nums[left] == target) {
        res.shift();
        res.unshift(left);
        left--;
      }
      while (right < nums.length && nums[right] == target) {
        res.pop();
        res.push(right);
        right++;
      }
      break;
    } else if (nums[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return res;
};
