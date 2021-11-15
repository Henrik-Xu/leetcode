/**
 * Maximal Square
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 */
let maximalSquare = function(matrix) {
  let R = matrix.length,
    C = matrix[0].length;
  let dp = new Array(R + 1).fill(0).map(() => new Array(C + 1).fill(0));
  let max = 0;
  for (let r = 1; r <= R; r++) {
    for (let c = 1; c <= C; c++) {
      if (matrix[r - 1][c - 1] == "1") {
        dp[r][c] =
          Math.min(Math.min(dp[r][c - 1], dp[r - 1][c]), dp[r - 1][c - 1]) + 1;
        max = Math.max(max, dp[r][c]);
      }
    }
  }
  return max * max;
};

let matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
];
let res = maximalSquare(matrix);
console.log(res);
