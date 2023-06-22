/**
 * Remove Duplicates from Sorted Array
 */
let removeDuplicates = function (nums) {
  let i = nums.length > 0 ? 1 : 0;
  for (const n of nums) {
    if (n > nums[i - 1]) {
      nums[i] = n;
      i++;
    }
  }
  return i;
};
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let res = removeDuplicates(nums);
console.log(res);
