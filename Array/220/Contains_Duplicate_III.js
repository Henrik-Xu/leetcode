/**
 * Contains Duplicate III
 * Given an integer array nums and two integers k and t, return true if there are two distinct indices i and j in the array such that
 * abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.
 */
let containsNearbyAlmostDuplicate = function(nums, k, t) {
  if (k < 1 || t < 0) return false;
  let map = new Map();
  let w = t + 1;
  for (let i = 0; i < nums.length; i++) {
    let bucket = Math.floor(nums[i] / w);
    if (
      map.has(bucket) ||
      (map.has(bucket - 1) && Math.abs(nums[i] - map.get(bucket - 1)) < w) ||
      (map.has(bucket + 1) && Math.abs(nums[i] - map.get(bucket + 1)) < w)
    ) {
      return true;
    }
    map.set(bucket, nums[i]);
    if (i >= k) {
      let lastBucket = Math.floor(nums[i - k] / w);
      map.delete(lastBucket);
    }
  }
  return false;
};
let nums = [1, 9, 5, 6, 7, 8],
  k = 2,
  t = 2;
let res = containsNearbyAlmostDuplicate(nums, k, t);
console.log(res);
