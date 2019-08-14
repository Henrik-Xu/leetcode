/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.delete(nums[i]);
      continue;
    }
    map.set(nums[i], 1);
  }
  return map.keys().next().value;
};

let result = singleNumber([2, 2, 1]);
console.log(result);
