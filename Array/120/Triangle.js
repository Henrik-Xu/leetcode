/**
 * Triangle
 * Given a triangle array, return the minimum path sum from top to bottom.
 */
let minimumTotal = function(triangle) {
  let last = triangle[triangle.length - 1];
  for (let layer = triangle.length - 2; layer >= 0; layer--) {
    for (let j = 0; j < triangle[layer].length; j++) {
      last[j] = Math.min(last[j], last[j + 1]) + triangle[layer][j];
    }
  }
  return last[0];
};
let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
let res = minimumTotal(triangle);
console.log(res);
