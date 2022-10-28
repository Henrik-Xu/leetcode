/**
 * Beautiful Arrangement II
 * Given two integers n and k, construct a list answer that contains n different positive integers ranging from 1 to n and 
 * obeys the following requirement:
 * Suppose this list is answer = [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] 
 * has exactly k distinct integers.
 * Return the list answer. If there multiple valid answers, return any of them.
 */
let constructArray = function (n, k) {
  let ans = new Array(n).fill(0);
  let c = 0;
  for (let i = 1; i < n - k; i++) {
    ans[c] = i;
    c++;
  }
  for (let i = 0; i <= k; i++) {
    ans[c] = (i % 2 == 0) ? (n - k + parseInt(i / 2)) : (n - parseInt(i / 2));
    c++;
  }
  return ans;
};
let n = 7, k = 4;
let res = constructArray(n, k);
console.log(res);
