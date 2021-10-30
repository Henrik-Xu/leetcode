/**
 * Pascal's Triangle
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */
let generate = function(numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  let res = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    res[i] = [1];
    for (let j = 0; j < res[i - 1].length - 1; j++) {
      res[i].push(res[i - 1][j] + res[i - 1][j + 1]);
    }
    res[i].push(1);
  }
  return res;
};
let numRows = 5;
let res = generate(numRows);
console.log(res);
