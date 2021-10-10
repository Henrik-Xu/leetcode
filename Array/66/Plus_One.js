/**
 * Plus One
 */
let plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  let newNumber = new Array(digits.length + 1).fill(0);
  newNumber[0] = 1;
  return newNumber;
};

let digits = [9];
let res = plusOne(digits);
console.log(res);
