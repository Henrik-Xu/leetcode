/**
 * Search a 2D Matrix
 */
let searchMatrix = function(matrix, target) {
  let R = matrix.length,
    C = matrix[0].length;
  let low = 0,
    high = R * C - 1;
  while (low <= high) {
    let middle = parseInt((low + high) / 2);
    let middle_value = matrix[Math.floor(middle / C)][middle % C];
    if (middle_value == target) {
      return true;
    } else if (middle_value > target) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return false;
};
let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]],
  target = 13;
let res = searchMatrix(matrix, target);
console.log(res);
