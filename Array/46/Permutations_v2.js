let permute = function(nums) {
  let result = [];
  let seen = new Map();
  backtracking(nums, result, seen, []);
  return result;
};
let backtracking = function(nums, res, seen, temp) {
  if (temp.length == nums.length) {
    res.push([...temp]);
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    if (seen.get(i)) continue;
    seen.set(i, true);
    temp.push(nums[i]);
    backtracking(nums, res, seen, temp);
    temp.pop();
    seen.set(i, false);
  }
};
