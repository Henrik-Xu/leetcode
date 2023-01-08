/**
 * Partition to K Equal Sum Subsets
 * Given an integer array nums and an integer k, 
 * return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.
 */
let canPartitionKSubsets = function (nums, k) {
  if (k > nums.length) return false;
  let sum = nums.reduce((sum, num) => sum + num, 0);
  if (sum % k != 0) return false;
  nums.sort((a, b) => a - b);
  let visited = new Array(nums.length).fill(false);
  return dfs(nums, visited, k, 0, sum / k, nums.length - 1);
};
let dfs = function (nums, visited, k, currentSum, targetSum, position) {
  if (k == 0) return true;
  if (currentSum == targetSum) {
    return dfs(nums, visited, k - 1, 0, targetSum, nums.length - 1);
  }
  for (let i = position; i >= 0; i--) {
    if (visited[i]) continue;
    if (i + 1 < nums.length && nums[i] == nums[i + 1] && !visited[i + 1]) continue;
    if (currentSum + nums[i] > targetSum) continue;
    visited[i] = true;
    if (dfs(nums, visited, k, currentSum + nums[i], targetSum, i - 1)) return true;
    visited[i] = false;
  }
  return false;
}
let nums = [4, 3, 2, 3, 5, 2, 1], k = 4;
let res = canPartitionKSubsets(nums, k);
console.log(res);
