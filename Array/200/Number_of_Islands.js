/**
 * Number of Islands
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
 */
let numIslands = function(grid) {
  let R = grid.length,
    C = grid[0].length;
  let count = 0;
  let DFSMasking = function(r, c) {
    if (r < 0 || r == R || c < 0 || c == C || grid[r][c] != "1") return;
    grid[r][c] = "0";
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dx, dy] of dirs) {
      let x = r + dx,
        y = c + dy;
      DFSMasking(x, y);
    }
  };
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (grid[r][c] == "1") {
        DFSMasking(r, c);
        count++;
      }
    }
  }
  return count;
};

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];
let res = numIslands(grid);
console.log(res);
