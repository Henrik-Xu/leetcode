/**
 * Set Matrix Zeroes
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.
 * You must do it in place.
 */
let setZeroes = function(matrix) {
  let R = matrix.length,
    C = matrix[0].length;
  let isCol = false;
  for (let r = 0; r < R; r++) {
    if (matrix[r][0] == 0) {
      isCol = true;
    }
    for (let c = 1; c < C; c++) {
      if (matrix[r][c] == 0) {
        matrix[r][0] = 0;
        matrix[0][c] = 0;
      }
    }
  }
  for (let r = 1; r < R; r++) {
    for (let c = 1; c < C; c++) {
      if (matrix[r][0] == 0 || matrix[0][c] == 0) {
        matrix[r][c] = 0;
      }
    }
  }
  if (matrix[0][0] == 0) {
    for (let c = 0; c < C; c++) {
      matrix[0][c] = 0;
    }
  }
  if (isCol) {
    for (let r = 0; r < R; r++) {
      matrix[r][0] = 0;
    }
  }
  return matrix;
};

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
let res = setZeroes(matrix);
console.log(res);
