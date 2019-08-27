/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let arr = Array.from(s);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += (arr[i].charCodeAt() - 64) * Math.pow(26, arr.length - i - 1);
  }
  return result;
};

let result = titleToNumber('A');
console.log(result);

let result2 = titleToNumber('AB');
console.log(result2);

let result3 = titleToNumber('ZY');
console.log(result3);
