/**
 * Valid Sudoku
 */
var isValidSudoku = function (board) {
    let seen = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                let s = '(' + board[i][j] + 'j';
                if (seen.has(i + s) || seen.has(s + j) || seen.has(Math.floor(i / 3) + s + Math.floor(j / 3))) {
                    return false;
                }
                seen.add(i + s);
                seen.add(s + j);
                seen.add(Math.floor(i / 3) + s + Math.floor(j / 3));
            }
        }
    }
    return true;
};
let board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
let res = isValidSudoku(board);
console.log(res);