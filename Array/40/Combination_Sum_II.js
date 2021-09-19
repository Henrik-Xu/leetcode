/**
 * Combination Sum II
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 */
let combinationSum2 = function(candidates, target) {
  let result = [];
  let arr = candidates.sort((a, b) => a - b);
  backtracking(candidates, target, result, [], 0);
  return result;
};
let backtracking = function(candidates, remain, result, temp, start) {
  if (remain < 0) {
    return;
  } else if (remain == 0) {
    result.push([...temp]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] == candidates[i - 1]) continue;
      temp.push(candidates[i]);
      backtracking(candidates, remain - candidates[i], result, temp, i + 1);
      temp.pop();
    }
  }
};
