/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n <= 0) return '';
  let columnTitle = '';

  while (n > 0) {
    let remainder = n % 26 == 0 ? 26 : n % 26;
    n = (n - remainder) / 26;
    columnTitle = String.fromCharCode(remainder + 64) + columnTitle;
  }
  return columnTitle;
};

let result1 = convertToTitle(1);
console.log(result1);

let result2 = convertToTitle(28);
console.log(result2);

let result3 = convertToTitle(701);
console.log(result3);

let result4 = convertToTitle(703);
console.log(result4);
