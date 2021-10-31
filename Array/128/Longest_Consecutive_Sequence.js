/**
 * Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time
 */
let longestConsecutive = function(nums) {
  if (nums.length == 0) {
    return 0;
  }
  let set = new Set(nums);
  let max = 0;
  for (const num of nums) {
    if (set.has(num - 1)) continue;
    let current = num;
    let currentMax = 1;
    while (set.has(current + 1)) {
      current++;
      currentMax++;
    }
    max = Math.max(currentMax, max);
  }
  return max;
};
let nums = [100, 4, 200, 1, 3, 2];
let res = longestConsecutive(nums);
console.log(res);
