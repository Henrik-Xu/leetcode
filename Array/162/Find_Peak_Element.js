/**
 * Find Peak Element
 */
let findPeakElement = function(nums) {
  let low = 0,
    high = nums.length - 1;
  while (low < high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] > nums[middle + 1]) {
      high = middle;
    } else {
      low = middle + 1;
    }
  }
  return low;
};
let nums = [1, 2, 1, 3, 5, 6, 4];
let res = findPeakElement(nums);
console.log(res);
