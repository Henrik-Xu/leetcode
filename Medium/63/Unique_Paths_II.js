/**
 * Unique Paths II
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m=obstacleGrid.length,n=obstacleGrid[0].length;
    let cur=new Array(n).fill(0);
    cur[0]=1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(obstacleGrid[i][j]==1){
                cur[j]=0;
            }else if(j>0){
                cur[j]+=cur[j-1];
            }
        }
    }
    return cur[n-1];
};
let obstacleGrid=[[0,1],[0,0]];
let res=uniquePathsWithObstacles(obstacleGrid);
console.log(res);