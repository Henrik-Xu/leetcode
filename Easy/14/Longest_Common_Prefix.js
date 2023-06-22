/**
 * Longest Common Prefix
 */
let longestCommonPrefix = function (strs) {
  let prefix = '';
  const n = strs.length;
  if (n == 0) return prefix;
  let first = strs[0];
  for (let i = 0; i < first.length; i++) {
    let isP = isPrefix(strs, i, first[i]);
    if (isP) {
      prefix += first[i];
    } else {
      break;
    }
  }
  return prefix;
};
let isPrefix = function (strs, index, character) {
  for (let i = 1; i < strs.length; i++) {
    if (strs[i].charAt(index) != character) {
      return false;
    }
  }
  return true;
}
let strs = ["dog", "racecar", "car"];
let res = longestCommonPrefix(strs);
console.log(res);
