/**
 * Unique Paths II
 */
let uniquePathsWithObstacles = function(obstacleGrid) {
  if (obstacleGrid[0][0] == 1) {
    return 0;
  }
  obstacleGrid[0][0] = 1;
  let R = obstacleGrid.length,
    C = obstacleGrid[0].length;
  for (let i = 1; i < R; i++) {
    obstacleGrid[i][0] =
      obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1 ? 1 : 0;
  }
  for (let i = 1; i < C; i++) {
    obstacleGrid[0][i] =
      obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] ? 1 : 0;
  }
  for (let i = 1; i < R; i++) {
    for (let j = 1; j < C; j++) {
      if (obstacleGrid[i][j] == 0) {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      } else {
        obstacleGrid[i][j] = 0;
      }
    }
  }
  return obstacleGrid[R - 1][C - 1];
};

let obstacleGrid = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0]
];
let res = uniquePathsWithObstacles(obstacleGrid);
console.log(res);
