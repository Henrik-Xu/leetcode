/**
 * Merge Sorted Array
 */
let merge = function(nums1, m, nums2, n) {
  let k = m + n - 1,
    i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};
let nums1 = [0],
  m = 0,
  nums2 = [1],
  n = 1;
let res = merge(nums1, m, nums2, n);
console.log(res);
