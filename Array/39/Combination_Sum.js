/**
 * Combination Sum
 */
let combinationSum = function(candidates, target) {
  let result = [];
  backtracking(result, [], target, 0, candidates);
  return result;
};
let backtracking = function(result, temp, remain, start, candidates) {
  if (remain < 0) {
    return;
  } else if (remain == 0) {
    result.push([...temp]);
  } else {
    for (let i = start; i < candidates.length; i++) {
      temp.push(candidates[i]);
      backtracking(result, temp, remain - candidates[i], i, candidates);
      temp.pop();
    }
  }
};
