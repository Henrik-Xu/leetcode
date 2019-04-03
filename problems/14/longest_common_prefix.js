/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
  let prefix = '';
  const strsLength = strs.length;
  if (strsLength == 0) return prefix;

  prefix = strs[0];
  for (let i = 1; i < strsLength; i++) {
    prefix = twoCommonPrefix(prefix, strs[i]);
    if (prefix === '') {
      break;
    }
  }

  return prefix;
};

let twoCommonPrefix = function(prefix, str) {
  while (str.indexOf(prefix) == -1 || str.indexOf(prefix) != 0) {
    prefix = prefix.substring(0, prefix.length - 1);
  }
  return prefix;
};
