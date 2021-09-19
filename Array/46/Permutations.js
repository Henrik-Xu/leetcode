/**
 * Permutations
 * Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
 */

let permute = function(nums) {
  let result = [];
  backtracking(nums, result, []);
  return result;
};
let backtracking = function(nums, result, temp) {
  if (temp.length == nums.length) {
    result.push([...temp]);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) continue;
      temp.push(nums[i]);
      backtracking(nums, result, temp);
      temp.pop();
    }
  }
};

let nums = [1, 2, 3];
let res = permute(nums);
console.log(res);
