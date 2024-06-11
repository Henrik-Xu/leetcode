/**
 * Interleaving String
 */
var isInterleave = function(s1, s2, s3) {
  let m=s1.length,n=s2.length,k=s3.length;
  if(m+n!=k){
    return false;
  }  
  let dp=new Array(m+1).fill(false).map(()=>new Array(n+1).fill(false));
  dp[0][0]=true;
  for (let i = 1; i <=m; i++) {
    dp[i][0]=dp[i-1][0]&& (s1[i-1]==s3[i-1]);
  }
  for (let j = 1; j <=n; j++) {
    dp[0][j]=dp[0][j-1] &&(s2[j-1]==s3[j-1]);
  }
  for (let i = 1; i <=m; i++) {
    for (let j = 1; j <=n; j++) {
        dp[i][j]=(dp[i-1][j]&& (s1[i-1]==s3[i+j-1])) || (dp[i][j-1] &&(s2[j-1]==s3[i+j-1]));
    }
  }
  return dp[m][n];
};

var isInterleave2 = function(s1, s2, s3) {
    let m=s1.length,n=s2.length,k=s3.length;
    if(m+n!=k){
      return false;
    }  
    let dp=new Array(m+1).fill(false);
    dp[0]=true;
    for (let i = 1; i <=m; i++) {
      dp[i]=dp[i-1]&& (s1[i-1]==s3[i-1]);
    }
    for (let j = 1; j <=n; j++) {
      dp[0]=dp[0] && (s2[j-1]==s3[j-1]);
      for (let i = 1; i <=m; i++) {
          dp[i]=(dp[i-1]&& (s1[i-1]==s3[i+j-1])) || (dp[i] &&(s2[j-1]==s3[i+j-1]));
      }
    }
    return dp[m];
  };

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
let res=isInterleave2(s1,s2,s3);
console.log(res);