/**
 * Approach III: Randomization
 * Complexity Analysis
 *  Time Complexity: O(∞) bad case,
 *  Space Complexity:O(1)
 */

let getRandom = function(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

var majorityElement = function(nums) {
  let middle = Math.floor(nums.length / 2);

  while (true) {
    let value = nums[getRandom(0, nums.length - 1)];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == value) {
        count++;
      }
    }
    if (count > middle) {
      return value;
    }
  }
};

let result = majorityElement([3, 2, 3]);
console.log(result);

let result2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result2);
