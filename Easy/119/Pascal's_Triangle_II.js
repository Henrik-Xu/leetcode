/**
 * Pascal's Triangle II
 * Could you optimize your algorithm to use only O(rowIndex) extra space?
 */
let getRow = function(rowIndex) {
    let res = [1];
    if (rowIndex == 0) return res;
    for (let i = 1; i <= rowIndex; i++) {
      for (let j = i; j > 0; j--) {
        if (i == j) {
          res[j] = 1;
        } else {
          res[j] = res[j - 1] + res[j];
        }
      }
    }
    return res;
};
let rowIndex=5;
let res=getRow(rowIndex);
console.log(res);