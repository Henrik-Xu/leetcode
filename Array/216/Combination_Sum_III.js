/**
 * Combination Sum III
 */
let combinationSum3 = function(k, n) {
  let sum = 0;
  for (let i = 1; i <= k; i++) {
    sum += i;
  }
  if (sum > n) return [];
  let res = [];
  let batracking = function(start, count, temp, rest) {
    if (count == 0) {
      if (rest == 0) {
        res.push([...temp]);
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      temp.push(i);
      batracking(i + 1, count - 1, temp, rest - i);
      temp.pop();
      if (rest <= i) {
        break;
      }
    }
  };
  batracking(1, k, [], n);
  return res;
};

let k = 3,
  n = 7;
let res = combinationSum3(k, n);
console.log(res);
