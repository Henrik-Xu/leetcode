/**
 * Permutations II
 * Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
 */
let permuteUnique = function(nums) {
  let res = [];
  nums.sort((a, b) => a - b);
  let seen = new Map();
  backtracking(res, nums, seen, []);
  return res;
};
let backtracking = function(res, nums, seen, temp) {
  if (temp.length == nums.length) {
    res.push([...temp]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (seen.get(i)) continue;
    if (i > 0 && nums[i] == nums[i - 1] && !seen.get(i - 1)) continue;
    temp.push(nums[i]);
    seen.set(i, true);
    backtracking(res, nums, seen, temp);
    temp.pop();
    seen.set(i, false);
  }
};
