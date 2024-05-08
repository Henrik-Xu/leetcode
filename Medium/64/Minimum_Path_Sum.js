/**
 * Minimum Path Sum
 */
var minPathSum = function(grid) {
    let m=grid.length,n=grid[0].length;
    let dp=new Array(m).fill(0).map(()=>new Array(n).fill(0));
    dp[0][0]=grid[0][0];
    for (let i = 1; i < m; i++) {
        dp[i][0]=dp[i-1][0]+grid[i][0];
    }
    for (let j = 1; j < n; j++) {
        dp[0][j]=dp[0][j-1]+grid[0][j];
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j];
        }
    }
    return dp[m-1][n-1];
};

var minPathSum2 = function(grid) {
    let m=grid.length,n=grid[0].length;
    let prev=new Array(m).fill(0),cur=new Array(m).fill(0);
    prev[0]=grid[0][0];
    for (let i = 1; i < m; i++) {
        prev[i]=prev[i-1]+grid[i][0];
    }
    for (let j = 1; j< n; j++) {
        cur[0]=prev[0]+grid[0][j];
        for (let i = 1; i < m; i++) {
            cur[i]=Math.min(cur[i-1],prev[i])+grid[i][j];
        }
        [cur,prev]=[prev,cur];
    }
    return prev[m-1];
};

var minPathSum3 = function(grid) {
    let m=grid.length,n=grid[0].length;
    let cur=new Array(m).fill(0);
    cur[0]=grid[0][0];
    for (let i = 1; i < m; i++) {
        cur[i]=cur[i-1]+grid[i][0];
    }
    for (let j = 1; j< n; j++) {
        cur[0]+=grid[0][j];
        for (let i = 1; i < m; i++) {
            cur[i]=Math.min(cur[i-1],cur[i])+grid[i][j];
        }
    }
    return cur[m-1];
};
let grid= [[1,3,1],[1,5,1],[4,2,1]];
let res=minPathSum3(grid);
console.log(res);