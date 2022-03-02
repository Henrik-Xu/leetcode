/**
 * Maximum Product of Word Lengths
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j])
 * where the two words do not share common letters. If no such two words exist, return 0.
 */

let maxProduct = function(words) {
  if (words == null || words.length == 0) return 0;
  let len = words.length;
  let value = new Array(len).fill(0);
  let a = "a".charCodeAt(0);
  for (let i = 0; i < len; i++) {
    let temp = words[i];
    value[i] = 0;
    for (let j = 0; j < temp.length; j++) {
      value[i] |= 1 << (temp[j].charCodeAt(0) - a);
    }
  }
  let max = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (
        (value[i] & value[j]) == 0 &&
        words[i].length * words[j].length > max
      ) {
        max = words[i].length * words[j].length;
      }
    }
  }
  return max;
};

let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
let res = maxProduct(words);
console.log(res);
