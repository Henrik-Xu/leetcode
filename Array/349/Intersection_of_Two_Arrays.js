/**
 * Intersection of Two Arrays
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 */
let intersection = function(nums1, nums2) {
  let set1 = new Set(nums1);
  let res = [];
  for (const num of nums2) {
    if (set1.has(num)) {
      res.push(num);
      set1.delete(num);
    }
  }
  return res;
};
let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
let res = intersection(nums1, nums2);
console.log(res);
