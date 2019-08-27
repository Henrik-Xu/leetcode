/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map();
  let middle = Math.floor(nums.length / 2);
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      if (map.get(nums[i]) >= middle) {
        return nums[i];
      }
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
};

let result = majorityElement([3, 2, 3]);
console.log(result);

let result2 = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result2);
