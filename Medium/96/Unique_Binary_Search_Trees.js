/**
 * Unique Binary Search Trees
 */
var numTrees = function(n) {
    let dp=new Array(n+1).fill(0);
    dp[0]=dp[1]=1;
    for (let i = 2; i <=n; i++) {
        for (let j = 1; j<=i; j++) {
            dp[i]+=dp[j-1]*dp[i-j];
        }
    }
    return dp[n];
};
let n = 3;
let res=numTrees(3);
console.log(res);