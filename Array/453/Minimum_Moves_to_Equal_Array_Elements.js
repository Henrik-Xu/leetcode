/**
 * Minimum Moves to Equal Array Elements
 * Given an integer array nums of size n, return the minimum number of moves required to make all array elements equal.
 * In one move, you can increment n - 1 elements of the array by 1.
 */
let minMoves = function(nums) {
  let sum = 0,
    n = nums.length;
  let min = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    sum += num;
    min = Math.min(min, num);
  }
  // assume we need m moves to reach x: sum+(n-1)*m = x * n,which x = min + m
  // m = sum - min*n
  let res = sum - min * n;
  return res;
};
let nums = [1, 2, 3];
let res = minMoves(nums);
console.log(res);
