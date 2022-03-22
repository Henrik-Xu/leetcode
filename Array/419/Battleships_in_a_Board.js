/**
 * Battleships in a Board
 * Given an m x n matrix board where each cell is a battleship 'X' or empty '.', return the number of the battleships on board.
 */
let countBattleships = function(board) {
  if (board.length == 0) return 0;
  let R = board.length,
    C = board[0].length;
  let count = 0;
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (board[r][c] == ".") continue;
      if (r > 0 && board[r - 1][c] == "X") continue;
      if (c > 0 && board[r][c - 1] == "X") continue;
      count++;
    }
  }
  return count;
};
let board = [["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]];
let res = countBattleships(board);
console.log(res);
