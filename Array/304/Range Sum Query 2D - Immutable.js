/**
 * Range Sum Query 2D - Immutable
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 * Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  let R = matrix.length,
    C = matrix[0].length;
  let dp = new Array(R).fill(0).map(() => new Array(C + 1).fill(0));
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      dp[r][c + 1] = dp[r][c] + matrix[r][c];
    }
  }
  this.dp = dp;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  for (let r = row1; r <= row2; r++) {
    sum += this.dp[r][col2 + 1] - this.dp[r][col1];
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

let matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
];
let obj = new NumMatrix(matrix);
let param_1 = obj.sumRegion(2, 1, 4, 3);
console.log(param_1);
