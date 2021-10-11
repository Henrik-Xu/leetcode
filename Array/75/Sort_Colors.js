/**
 * Sort Colors
 */
let sortColors = function(nums) {
  function swap(i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
  let start = 0,
    end = nums.length - 1;
  for (let i = 0; i <= end; i++) {
    while (nums[i] == 2 && i < end) {
      swap(i, end);
      end--;
    }
    while (nums[i] == 0 && i > start) {
      swap(i, start);
      start++;
    }
  }
  console.log(nums);
};

let nums = [1, 0, 2, 0];
let res = sortColors(nums);
console.log(res);
