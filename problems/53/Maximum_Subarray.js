/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = nums[0];
  let sum = 0;
  for (const element of nums) {
    sum += element;
    if (max < sum) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(maxSubArray([-2, -1, -3, 4, -1, 2, 1, -5, 4]));
