/**
 * Longest Word in Dictionary
 */
let longestWord = function (words) {
  let ans = '';
  let wordsets = new Set(words);
  words.sort((a, b) => a.length == b.length ? a.localeCompare(b) : b.length - a.length);
  for (const word of words) {
    let good = true;
    for (let k = 1; k < word.length; k++) {
      if (!wordsets.has(word.substring(0, k))) {
        good = false;
        break;
      }
    }
    if (good) return word;
  }
  return '';
};
let words = ["a", "banana", "app", "appl", "ap", "apply", "apple"];
let res = longestWord(words);
console.log(res);
