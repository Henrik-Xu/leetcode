/**
 * Non-decreasing Array
 */
let checkPossibility = function (nums) {
  let cnt = 0;
  for (let i = 1; i < nums.length && cnt <= 1; i++) {
    if (nums[i - 1] > nums[i]) {
      cnt++;
      if (i - 2 < 0 || nums[i - 2] <= nums[i]) {
        nums[i - 1] = nums[i];
      } else {
        nums[i] = nums[i - 1];
      }
    }
  }
  return cnt <= 1;
};
let nums = [4, 2, 1];
let res = checkPossibility(nums);
console.log(res);
