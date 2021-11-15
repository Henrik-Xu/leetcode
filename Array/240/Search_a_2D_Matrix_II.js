/**
 * Search a 2D Matrix II
 */
let searchMatrix = function(matrix, target) {
  let R = matrix.length,
    C = matrix[0].length;
  let r = 0,
    c = C - 1;
  while (r >= 0 && r < R && c >= 0 && c < C) {
    if (matrix[r][c] == target) {
      return true;
    } else if (matrix[r][c] > target) {
      c--;
    } else {
      r++;
    }
  }
  return false;
};
let matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ],
  target = 5;
let res = searchMatrix(matrix, target);
console.log(res);
