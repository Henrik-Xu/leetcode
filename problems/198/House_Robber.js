/**
 * At index [i], you only need to know the maximum profit at [i-2]  and [i-1]. This is a slight variation on fibonacci.
 * Complexity analysis:
 *  Time Complexity : O(n) times
 *  Space Complexity : O(1) space
 * */
let rob = function(nums) {
  if (nums.length == undefined) return 0;

  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  let maxAtTwoBefore = nums[0];
  let maxAtOneBefore = nums[1];

  for (let i = 2; i < nums.length; i++) {
    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore);

    maxAtTwoBefore = maxAtOneBefore;
    maxAtOneBefore = maxAtCurrent;
  }

  return maxAtOneBefore;
};
