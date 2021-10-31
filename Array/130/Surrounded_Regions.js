/**
 * Surrounded Regions
 * Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 */
let solve = function(board) {
  if (board.length == 0) return;
  let R = board.length,
    C = board[0].length;
  let mask = "*";
  let dfs = function(r, c) {
    if (r < 0 || r == R || c < 0 || c == C || board[r][c] != "O") return;
    board[r][c] = mask;
    let dirs = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    for (const [dx, dy] of dirs) {
      dfs(r + dx, c + dy);
    }
  };
  for (let c = 0; c < C; c++) {
    dfs(0, c);
    dfs(R - 1, c);
  }
  for (let r = 0; r < R; r++) {
    dfs(r, 0);
    dfs(r, C - 1);
  }
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] == "O") {
        board[r][c] = "X";
        continue;
      }
      if (board[r][c] == mask) {
        board[r][c] = "O";
      }
    }
  }
};
let board = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"]
];
let res = solve(board);
console.log(res);
