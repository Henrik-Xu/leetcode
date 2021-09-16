/**
 * Valid Sudoku
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 *  1.Each row must contain the digits 1-9 without repetition.
 *  2.Each column must contain the digits 1-9 without repetition.
 *  3.Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */
let isValidSudoku = function(board) {
  let seen = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == ".") continue;
      let s = "(" + board[i][j] + ")";
      if (
        seen.has(s + i) ||
        seen.has(j + s) ||
        seen.has(parseInt(i / 3) + s + parseInt(j / 3))
      ) {
        return false;
      } else {
        seen.add(s + i);
        seen.add(j + s);
        seen.add(parseInt(i / 3) + s + parseInt(j / 3));
      }
    }
  }
  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

let res = isValidSudoku(board);
console.log(res);
