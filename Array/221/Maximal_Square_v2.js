/**
 * Maximal_Square.js
 */
let maximalSquare = function(matrix) {
  let R = matrix.length,
    C = matrix[0].length;
  let dp = new Array(c + 1).fill(0);
  let max = 0,
    prev = 0;
  for (let r = 1; r < R; r++) {
    for (let c = 1; c < C; c++) {
      let temp = dp[c];
      if (matrix[r - 1][c - 1] == "1") {
        dp[c] = Math.min(Math.min(dp[c - 1], prev), dp[c]) + 1;
        max = Math.max(max, dp[c]);
      } else {
        dp[c] = 0;
      }
      prev = temp;
    }
  }
  return max * max;
};
