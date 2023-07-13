/**
 * Unique Morse Code Words
 */
let uniqueMorseRepresentations = function (words) {
    let arr = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
      "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-",
      ".--", "-..-", "-.--", "--.."];
    let set = new Set();
    for (const word of words) {
      let str = '';
      for (let i = 0; i < word.length; i++) {
        str += arr[word.charCodeAt(i) - 'a'.charCodeAt(0)];
      }
      set.add(str);
    }
    return set.size;
  };