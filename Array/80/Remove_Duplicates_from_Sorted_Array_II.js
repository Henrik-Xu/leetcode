/**
 * Remove Duplicates from Sorted Array II
 */
let removeDuplicates = function(nums, k) {
  let i = 0;
  for (const n of nums) {
    if (i < 2 || n > nums[i - 2]) {
      nums[i++] = n;
    }
  }
  return i;
};

let nums = [1, 1, 1, 2, 2, 3];
let res = removeDuplicates(nums);
console.log(res);
