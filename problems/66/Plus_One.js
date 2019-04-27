/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let bit = 1;
  let newArr = [];
  for (let i = digits.length - 1; i >= 0; i--) {
    let element = digits[i] + bit;
    newArr.unshift(element % 10);
    bit = parseInt(element / 10);
  }
  if (bit > 0) {
    newArr.unshift(bit);
  }
  return newArr;
};

console.log(plusOne([9, 9]));
