/**
 * Edit Distance
 */
var minDistance = function(word1, word2) {
    let m=word1.length,n=word2.length;
    let dp=new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    for (let i = 1; i <= m; i++) {
       dp[i][0]=i;
    }
    for (let j = 1; j <= n; j++) {
       dp[0][j]=j;
    }
    for (let i = 1; i <= m; i++) {
       for (let j = 1; j <= n; j++) {
        if(word1[i-1]==word2[j-1]){
            dp[i][j]=dp[i-1][j-1];
        }else{
            dp[i][j]=Math.min(dp[i-1][j-1],Math.min(dp[i][j-1]),dp[i-1][j])+1;
        }
       } 
    }
    return dp[m][n];
};

var minDistance2 = function (word1, word2) {
    let m = word1.length, n = word2.length;
    let pre = new Array(n + 1).fill(0), cur = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
        pre[j] = j;
    }
    for (let i = 1; i <= m; i++) {
        cur[0] = i;
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                cur[j] = pre[j - 1];
            } else {
                cur[j] = Math.min(pre[j - 1], Math.min(pre[j], cur[j - 1]))+1;
            }
        }
        [pre,cur]=[cur,pre];
    }
    return pre[n];
};

var minDistance3 = function (word1, word2) {
    let m = word1.length, n = word2.length;
    let cur = new Array(n + 1).fill(0);
    for (let j = 1; j <= n; j++) {
        cur[j] = j;
    }
    let pre;
    for (let i = 1; i <= m; i++) {
        pre=cur[0];
        cur[0] = i;
        for (let j = 1; j <= n; j++) {
            let temp=cur[j];
            if (word1[i - 1] == word2[j - 1]) {
                cur[j] = pre;
            } else {
                cur[j] = Math.min(pre, Math.min(cur[j], cur[j - 1]))+1;
            }
            pre=temp;
        }
    }
    return cur[n];
};