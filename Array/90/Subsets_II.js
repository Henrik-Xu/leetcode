/**
 * Subsets II
 * Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 */
let subsetsWithDup = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let backtracking = function(temp, start) {
    res.push([...temp]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] == nums[i - 1]) continue;
      temp.push(nums[i]);
      backtracking(temp, i + 1);
      temp.pop();
    }
  };
  backtracking([], 0);
  return res;
};
