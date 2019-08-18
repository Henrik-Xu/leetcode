/**
 * @param {number} rowIndex
 * @return {number[]}
 * Could you optimize your algorithm to use only O(k) extra space?
 */
var getRow = function(rowIndex) {
  let result = [1];

  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      if (j == i) {
        result[j] = 1;
      } else {
        result[j] = result[j - 1] + result[j];
      }
    }
  }

  return result;
};

let result = getRow(3);
