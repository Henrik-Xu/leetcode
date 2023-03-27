/**
 * Valid Tic-Tac-Toe State
 */
let validTicTacToe = function (board) {
  let turns = 0;
  let xwin = false, owin = false;
  let rows = new Array(3).fill(0);
  let cols = new Array(3).fill(0);
  let diag = 0;
  let antidiag = 0;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i].charAt(j) == 'X') {
        turns++;
        rows[i]++;
        cols[j]++;
        if (i == j) {
          diag++;
        }
        if (i + 2 == j) {
          antidiag++;
        }
      }
      if (board[i].charAt(j) == 'O') {
        turns--;
        rows[i]--;
        cols[j]--;
        if (i == j) {
          diag--;
        }
        if (i + 2 == j) {
          antidiag--;
        }
      }
    }
  }
  xwin = rows[0] == 3 || rows[1] == 3 || rows[2] == 3 ||
    cols[0] == 3 || cols[1] == 3 || cols[2] == 3 ||
    diag == 3 || antidiag == 3;
  owin = rows[0] == -3 || rows[1] == -3 || rows[2] == -3 ||
    cols[0] == -3 || cols[1] == -3 || cols[2] == -3 ||
    diag == -3 || antidiag == -3;
  if (xwin && turns == 0 || owin && turns == 1) {
    return false;
  }
  return (turns == 0 || turns == 1) && (!xwin || !owin);
};
let board = ["XXO", "XOX", "OXO"];
let res = validTicTacToe(board);
console.log(res);
