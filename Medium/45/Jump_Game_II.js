/**
 * Jump Game II
 */
let jump = function (nums) {
    let jumps = 0, curEnd = 0, curFarthest = 0;
    for (let i = 0; i < nums.length - 1; i++) {
      curFarthest = Math.max(curFarthest, i + nums[i]);
      if (i == curEnd) {
        jumps++;
        curEnd = curFarthest;
      }
    }
    return jumps;
  };
let nums = [2,3,1,1,4];
let res=jump(nums);
console.log(res);