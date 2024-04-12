/**
 * Rotate Image
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function (matrix) {
    transpose(matrix);
    reflect(matrix);
  };
  
  let transpose = function (matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        swap(matrix, i, j, i, j);
      }
    }
  }
  
  let reflect = function (matrix) {
    let n = matrix.length;
    let middle = Math.floor(n / 2);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < middle; j++) {
        swap(matrix, i, j, n - j - 1, i);
      }
    }
  }
  
  let swap = function (matrix, i1, j1, i2, j2) {
    let temp = matrix[i1][j1];
    matrix[i1][j1] = matrix[j2][i2];
    matrix[j2][i2] = temp;
  }
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let res=rotate(matrix);
console.log(res);