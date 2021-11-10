/**
 * Contains Duplicate II
 */
let containsNearbyDuplicate = function(nums, k) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      map.delete(nums[i - k - 1]);
    }
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], 1);
    }
  }
  return false;
};
let nums = [1, 2, 3, 1, 2, 3],
  k = 2;
let res = containsNearbyDuplicate(nums, k);
console.log(res);
