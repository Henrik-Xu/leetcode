/**
 * Palindrome Number
 */
let isPalindrome = function (x) {
  if (x < 0 || (x != 0 && x % 10 == 0)) return false;
  let reverseNumber = 0;
  while (x > reverseNumber) {
    reverseNumber *= 10;
    reverseNumber += x % 10;
    x = parseInt(x / 10);
  }
  if (x == reverseNumber || x == parseInt(reverseNumber / 10)) {
    return true;
  }
  return false;
};
let x = -121;
let res = isPalindrome(x);
console.log(res);
