/**
 * Range Sum Query - Immutable
 * Given an integer array nums, handle multiple queries of the following type:
 * Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
 */

let NumArray = function(nums) {
  let sum = new Array(nums.length).fill(0);
  sum[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i];
  }
  this.sum = sum;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  if (left == 0) {
    return this.sum[right];
  }
  return this.sum[right] - this.sum[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
let nums = [-2, 0, 3, -5, 2, -1];
let obj = new NumArray(nums);
let res = obj.sumRange(2, 5);
console.log(res);
