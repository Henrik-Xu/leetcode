/**
 * Approach II
 * Hash Table
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    map.set(numbers[i], i);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [i + 1, map.get(target - numbers[i]) + 1];
    }
  }
};

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);
