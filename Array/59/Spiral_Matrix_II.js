/**
 * Spiral Matrix II
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 */
let generateMatrix = function(n) {
  let matrix = new Array(n).fill(0).map(x => new Array(n).fill(0));
  let r1 = 0,
    r2 = n - 1,
    c1 = 0,
    c2 = n - 1;
  let cnt = 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let i = c1; i <= c2; i++) {
      matrix[r1][i] = cnt++;
    }
    for (let i = r1 + 1; i <= r2; i++) {
      matrix[i][c2] = cnt++;
    }
    if (r1 < r2 && c1 < c2) {
      for (let i = c2 - 1; i >= c1; i--) {
        matrix[r2][i] = cnt++;
      }
      for (let i = r2 - 1; i > r1; i--) {
        matrix[i][c1] = cnt++;
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return matrix;
};

let n = 4;
let res = generateMatrix(n);
console.log(res);
