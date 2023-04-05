/**
 * Expressive Words
 */
let expressiveWords = function (s, words) {
  let ans = 0;
  for (const word of words) {
    if (check(s, word)) {
      ans++;
    }
  }
  return ans;
};
// let check = function (S, W) {
//   let m = S.length, n = W.length, j = 0;
//   for (let i = 0; i < S.length; i++) {
//     if (j < n && S[i] == W[j]) j++;
//     else if (i > 1 && S[i - 2] == S[i - 1] && S[i - 1] == S[i]);
//     else if (i > 0 && i < m - 1 && S[i - 1] == S[i] && S[i] == S[i + 1]);
//     else {
//       return false;
//     }
//   }
//   return j == n;
// }
let check = function (S, W) {
  let m = S.length, n = W.length, i = 0, j = 0;
  for (let i2 = 0, j2 = 0; i < m && j < n; i = i2, j = j2) {
    if (S[i] != W[j]) return false;
    while (i2 < m && S[i2] == S[i]) i2++;
    while (j2 < n && W[j2] == W[j]) j2++;
    if (i2 - i != j2 - j && i2 - i < Math.max(3, j2 - j)) {
      return false;
    }
  }
  return i == m && j == n;
}
let s = "aaa", words = ["aaaa"];
let res = expressiveWords(s, words);
console.log(res);
