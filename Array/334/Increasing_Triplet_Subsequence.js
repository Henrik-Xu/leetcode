/**
 * Increasing Triplet Subsequence
 * Given an integer array nums, return true if there exists a triple of indices (i, j, k)
 * such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
 */
let increasingTriplet = function(nums) {
  let first = Number.MAX_SAFE_INTEGER,
    second = Number.MAX_SAFE_INTEGER;
  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      return true;
    }
  }
  return false;
};

let case1 = [1, 2, 3, 4, 5];
let res = increasingTriplet(case1);
console.log(res);

let case2 = [5, 4, 3, 2, 1];
let res2 = increasingTriplet(case2);
console.log(res2);
