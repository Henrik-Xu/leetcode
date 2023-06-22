/**
 * Remove Element
 */
let removeElement = function (nums, val) {
  let i = 0;
  for (const n of nums) {
    if (n != val) {
      nums[i] = n;
      i++;
    }
  }
  return i;
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2;
let res = removeElement(nums, val);
console.log(res);
