/**
 * Find the Width of Columns of a Grid
 */
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const ans = [];
    for (let j = 0; j < n; j++) {
      let len = 1;
      for (let i = 0; i < m; i++) {
        len = Math.max(len, grid[i][j].toString().length);
      }
      ans.push(len);
    }
    return ans;
};