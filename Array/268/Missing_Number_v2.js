/**
 * Missing_Number
 */
let missingNumber = function(nums) {
  let res = 0,
    n = nums.length;
  for (let i = 0; i < n; i++) {
    res ^= nums[i] ^ i;
  }
  return res ^ n;
};
let nums = [3, 0, 1];
let res = missingNumber(nums);
console.log(res);
