/**
 * Approach IV: Boyer-Moore Voting Algorithm
 * Complexity Analysis
 *  Time Complexity: O(n)
 *  Space Complexity:O(1)
 */
var majorityElement = function(nums) {
  let count = 0;
  let candidate = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      candidate = nums[i];
    }
    count += nums[i] == candidate ? 1 : -1;
  }
  return candidate;
};

let result = majorityElement([3, 2, 3]);
console.log(result);

let result2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result2);
