/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let result = [];
  if (numRows < 1) return result;
  result[0] = [];
  result[0].push(1);
  if (numRows == 1) return result;

  for (let i = 2; i < numRows; i++) {
    result[i] = [];
    result[i].push(1);
    for (let j = 0; j < result[i - 1].length - 1; j++) {
      result[i].push(result[i - 1][j] + result[i - 1][j + 1]);
    }
    result[i].push(1);
  }

  return result;
};

let result = generate(5);
console.log(result);
