/**
 * Number of Longest Increasing Subsequence
 * Given an integer array nums, return the number of longest increasing subsequences.
 * Notice that the sequence has to be strictly increasing.
 */
let findNumberOfLIS = function (nums) {
  let n = nums.length, res = 0, max_len = 0;
  let len = new Array(n).fill(0), cnt = new Array(n).fill(0);
  for (let i = 0; i < nums.length; i++) {
    len[i] = cnt[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (len[i] == len[j] + 1) {
          cnt[i] += cnt[j];
        }
        if (len[i] < len[j] + 1) {
          len[i] = len[j] + 1;
          cnt[i] = cnt[j];
        }
      }
    }
    if (max_len == len[i]) {
      res += cnt[i];
    }
    if (max_len < len[i]) {
      max_len = len[i];
      res = cnt[i];
    }
  }
  return res;
};
