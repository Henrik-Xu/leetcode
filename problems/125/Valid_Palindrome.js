/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/\W/g, '');
  let arr = Array.from(s);
  let length = arr.length;
  let middle = Math.floor(length / 2);

  let isP = true;
  for (let i = 0; i < middle; i++) {
    if (
      arr[i].toLocaleLowerCase() !== arr[length - 1 - i].toLocaleLowerCase()
    ) {
      return false;
    }
  }
  return isP;
};

let result = isPalindrome('A man, a plan, a canal: Panama');
console.log(result);

let result2 = isPalindrome('race a car');
console.log(result2);
