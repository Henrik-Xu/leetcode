/**
 * Range Sum Query - Mutable
 */

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  let len = Math.ceil(Math.sqrt(nums.length));
  let blocks = new Array(len).fill(0);
  for (let i = 0; i < nums.length; i++) {
    let index = Math.floor(i / len);
    blocks[index] += nums[i];
  }
  this.blocks = blocks;
  this.nums = nums;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  let idx = Math.floor(index / this.blocks.length);
  this.blocks[idx] = this.blocks[idx] - this.nums[index] + val;
  this.nums[index] = val;
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let len = this.blocks.length;
  let low = Math.floor(left / len);
  let high = Math.floor(right / len);
  let sum = 0;
  if (low == high) {
    for (let i = left; i <= right; i++) {
      sum += this.nums[i];
    }
  } else {
    for (let i = left; i < (low + 1) * len; i++) {
      sum += this.nums[i];
    }
    for (let i = low + 1; i < high; i++) {
      sum += this.blocks[i];
    }
    for (let i = high * len; i <= right; i++) {
      sum += this.nums[i];
    }
  }
  return sum;
};

let nums = [9, -8];
let obj = new NumArray(nums);
obj.update(0, 3);
let res = obj.sumRange(0, 1);
console.log(res);
