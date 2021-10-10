/**
 * Minimum Path
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right,
 * which minimizes the sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 */
let minPathSum = function(grid) {
  let R = grid.length,
    C = grid[0].length;
  let sum = new Array(R).fill(0).map(() => new Array(C).fill(0));
  for (let r = 0; r < R; r++) {
    sum[r][0] = r > 0 ? sum[r - 1][0] + grid[r][0] : grid[r][0];
  }
  for (let c = 0; c < C; c++) {
    sum[0][c] = c > 0 ? sum[0][c - 1] + grid[0][c] : grid[0][c];
  }
  for (let r = 1; r < R; r++) {
    for (let c = 1; c < C; c++) {
      sum[r][c] = Math.min(sum[r - 1][c], sum[r][c - 1]) + grid[r][c];
    }
  }
  return sum[R - 1][C - 1];
};

let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
let res = minPathSum(grid);
console.log(res);
