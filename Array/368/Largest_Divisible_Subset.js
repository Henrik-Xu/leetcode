/**
 * Largest Divisible Subset
 * Given a set of distinct positive integers nums, return the largest subset answer such that every pair (answer[i], answer[j]) of elements in this subset satisfies:
 * answer[i] % answer[j] == 0, or
 * answer[j] % answer[i] == 0
 * If there are multiple solutions, return any of them.
 */
let largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => a - b);
  let len = nums.length;
  let count = new Array(len).fill(0);
  let pre = new Array(len).fill(-1);
  let max = 0,
    index = -1;
  for (let i = 0; i < len; i++) {
    count[i] = 1;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] % nums[j] == 0 && 1 + count[j] > count[i]) {
        count[i] = count[j] + 1;
        pre[i] = j;
      }
    }
    if (count[i] > max) {
      max = count[i];
      index = i;
    }
  }
  let res = [];
  while (index != -1) {
    res.push(nums[index]);
    index = pre[index];
  }
  return res;
};

let nums = [1, 2, 4, 8];
let res = largestDivisibleSubset(nums);
console.log(res);
