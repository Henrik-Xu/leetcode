/**
 * Jump Game
 * You are given an integer array nums.
 * You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
 * Return true if you can reach the last index, or false otherwise.
 */

let canJump = function(nums) {
  let reachable = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > reachable) {
      return false;
    }
    reachable = Math.max(reachable, i + nums[i]);
  }
  return true;
};

let nums = [3, 2, 1, 0, 4];
let res = canJump(nums);
console.log(res);
