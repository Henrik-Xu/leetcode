/**
 * Triangle
 */
let minimumTotal = function (triangle) {
    let last = triangle[triangle.length - 1];
    for (let layer = triangle.length - 2; layer >= 0; layer--) {
      for (let j = 0; j < triangle[layer].length; j++) {
        last[j] = Math.min(last[j], last[j + 1]) + triangle[layer][j];
      }
    }
    return last[0];
  };