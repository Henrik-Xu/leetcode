/**
 * Spiral Matrix
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 */
let spiralOrder = function(matrix) {
  if (matrix.length == 0) return 0;
  let r1 = 0,
    r2 = matrix.length - 1;
  let c1 = 0,
    c2 = matrix[0].length - 1;
  let res = [];
  while (r1 <= r2 && c1 <= c2) {
    for (let i = c1; i <= c2; i++) {
      res.push(matrix[r1][i]);
    }
    for (let i = r1 + 1; i <= r2; i++) {
      res.push(matrix[i][c2]);
    }
    if (r1 < r2 && c1 < c2) {
      for (let i = c2 - 1; i >= c1; i--) {
        res.push(matrix[r2][i]);
      }
      for (let i = r2 - 1; i > r1; i--) {
        res.push(matrix[i][c1]);
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return res;
};

let matrix = [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]];
let res = spiralOrder(matrix);
console.log(res);
