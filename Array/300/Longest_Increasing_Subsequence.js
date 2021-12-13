/**
 * Longest Increasing Subsequence
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 */
let lengthOfLIS = function(nums) {
  let tails = new Array(nums.length).fill(0);
  let size = 0;
  for (const n of nums) {
    let i = 0,
      j = size;
    while (i != j) {
      let middle = Math.floor((i + j) / 2);
      if (tails[middle] < n) {
        i = middle + 1;
      } else {
        j = middle;
      }
    }
    tails[i] = n;
    if (i == size) {
      size++;
    }
  }
  return size;
};
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
let res = lengthOfLIS(nums);
console.log(res);
