/**
 * Unique Paths
 */
var uniquePaths = function(m, n) {
    let dp=new Array(m).fill(1).map(()=>new Array(n).fill(1));
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j]=dp[i-1][j]+dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};

var uniquePaths2 = function(m, n) {
    let prev=new Array(n).fill(1),cur=new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j]=prev[j]+cur[j-1];
        }
        [prev,cur]=[cur,prev];
    }
    return prev[n-1];
};

var uniquePaths3 = function(m, n) {
    let cur=new Array(n).fill(1);
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j]+=cur[j-1];
        }
    }
    return cur[n-1];
};
let m=7,n=3;
let res=uniquePaths2(m,n);
console.log(res);