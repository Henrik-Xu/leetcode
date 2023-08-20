/**
 * Largest Local Values in a Matrix
 */
var largestLocal = function(grid) {
  let n= grid.length;
  let maxLocal=new Array(n-2).fill(0).map(x=>new Array(n-2).fill(0));
  for (let i = 0; i < n-2; i++) {
    for (let j = 0; j < n-2; j++) {
        for (let ii = i; ii < i+3; ii++) {
            for (let jj = j; jj < j+3; jj++) {
                maxLocal[i][j]=Math.max(maxLocal[i][j],grid[ii][jj]);
            }
        }
    }
  }
  return maxLocal;
};
let grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];
let res=largestLocal(grid);
console.log(res);