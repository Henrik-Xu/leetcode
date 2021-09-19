/**
 * Jump Game II
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 */
let jump = function(nums) {
  let jumps = 0,
    curEnd = 0,
    curFarthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    curFarthest = Math.max(curFarthest, i + nums[i]);
    if (i == curEnd) {
      jumps++;
      curEnd = curFarthest;
    }
  }
  return jumps;
};

let nums = [2, 3, 3, 1, 4];
let res = jump(nums);
console.log(res);
