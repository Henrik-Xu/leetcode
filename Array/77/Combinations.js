/**
 * Combinations
 * Given two integers n and k, return all possible combinations of k numbers out of the range [1, n].
 * You may return the answer in any order.
 */
let combine = function(n, k) {
  let res = [];
  let backtracking = function(temp, start, end) {
    if (end == 0) {
      res.push([...temp]);
      return;
    }
    for (let i = start; i <= n; i++) {
      temp.push(i);
      backtracking(temp, i + 1, end - 1);
      temp.pop();
    }
  };
  backtracking([], 1, k);
  return res;
};
let n = 4,
  k = 2;
let res = combine(n, k);
console.log(res);
