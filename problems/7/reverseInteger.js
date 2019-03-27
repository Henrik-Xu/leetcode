/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const Max_int = Math.pow(2, 31) - 1;
  const Min_int = Math.pow(-2, 31);
  let rev = 0;
  while (x != 0) {
    let pop = x % 10;
    x = parseInt(x / 10);

    if (rev > Max_int / 10 || (rev == Max_int / 10 && pop > 7)) return 0;

    if (rev < Min_int / 10 || (rev == Min_int / 10 && pop < -8)) return 0;
    rev = rev * 10 + pop;
  }
  return rev;
};

console.log(reverse(123));
