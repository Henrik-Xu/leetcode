/**
 * Intersection of Two Arrays
 */
let intersection = function (nums1, nums2) {
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