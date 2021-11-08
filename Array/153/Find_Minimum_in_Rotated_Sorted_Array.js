/**
 * Find Minimum in Rotated Sorted Array
 */
let findMin = function(nums) {
  let low = 0,
    high = nums.length - 1;
  if (nums[high] > nums[low] || low == high) return nums[low];
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] > nums[middle + 1]) {
      return nums[middle + 1];
    }
    if (nums[middle - 1] > nums[middle]) {
      return nums[middle];
    }
    if (nums[middle] > nums[0]) {
      low = middle + 1;
    } else if (nums[middle] < nums[0]) {
      high = middle - 1;
    }
  }
};

let nums = [3, 4, 5, 1, 2];
let res = findMin(nums);
console.log(res);
