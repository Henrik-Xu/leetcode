/**
 * Approach II: Sorting
 * Complexity Analysis
 *  Time Complexity: O(nlogn)
 *  Space Complexity:O(1)
 */
var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);

  return nums[Math.floor(nums.length / 2)];
};

let result = majorityElement([3, 2, 3]);
console.log(result);

let result2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result2);
