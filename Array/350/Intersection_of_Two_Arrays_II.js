/**
 * Intersection of Two Arrays II
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */
let intersect = function(nums1, nums2) {
  let getMap = function(nums) {
    let map = new Map();
    for (const num of nums) {
      if (map.has(num)) {
        map.set(num, map.get(num) + 1);
      } else {
        map.set(num, 1);
      }
    }
    return map;
  };
  let map1 = getMap(nums1);
  let map2 = getMap(nums2);
  let res = [];
  for (const [num, count1] of map1) {
    if (!map2.has(num)) continue;
    let count2 = map2.get(num);
    let min = Math.min(count1, count2);
    for (let i = 0; i < min; i++) {
      res.push(num);
    }
  }
  return res;
};
let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];
let res = intersect(nums1, nums2);
console.log(res);
