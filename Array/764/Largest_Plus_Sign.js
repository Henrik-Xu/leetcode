/**
 * Largest Plus Sign
 */
let orderOfLargestPlusSign = function(n, mines) {
    let set=new Set();
    for (const [key,value] of mines) {
        set.add(key*n+value);
    }
    let dp=new Array(n).fill(0).map(()=>new Array(n).fill(0));
    let ans=0,count;
    for (let r = 0; r < n; r++) {
        count=0;
        for (let c = 0; c < n; c++) {
            count=set.has(r*n+c)?0:count+1;
            dp[r][c]=count;
        }
        count=0;
        for (let c = n-1; c >=0; c--) {
            count=set.has(r*n+c)?0:count+1;
            dp[r][c]=Math.min(dp[r][c],count);
        }
    }
    for (let c = 0; c < n; c++) {
        count=0;
        for (let r = 0; r < n; r++) {
            count=set.has(r*n+c)?0:count+1;
            dp[r][c]=Math.min(dp[r][c],count);
        }
        count=0;
        for (let r = n-1; r >=0; r--) {
            count=set.has(r*n+c)?0:count+1;
            dp[r][c]=Math.min(dp[r][c],count);
            ans=Math.max(dp[r][c],ans);
        }
    }
    return ans;
};
let n = 5, mines = [[4,2]];
let res=orderOfLargestPlusSign(n,mines);
console.log(res);