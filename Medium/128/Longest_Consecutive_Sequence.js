/**
 * Longest Consecutive Sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function (nums) {
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