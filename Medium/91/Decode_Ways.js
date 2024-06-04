/**
 * Decode Ways
 */
var numDecodings = function(s) {
    if(s==null || s.length==0){
        return 0;
    }
    let n=s.length;
    let dp=new Array(n+1).fill(0);
    dp[n]=1;
    for (let i = n-1; i>=0; i--) {
        if(s[i]!='0'){
            dp[i]+=dp[i+1];
        }
        if(i+1<n && (s[i]=='1' || (s[i]=='2' && s[i+1]<7))){
            dp[i]+=dp[i+2];
        }
    }
    return dp[0];
};

var numDecodings2 = function(s) {
    if(s==null || s.length==0){
        return 0;
    }
    let n=s.length;
    let dp=0,dp1=1,dp2=0;
    for (let i = n-1; i>=0; i--) {
        if(s[i]!='0'){
            dp=dp1;
        }
        if(i+1<n && (s[i]=='1' || (s[i]=='2' && s[i+1]<7))){
            dp+=dp2;
        }
        dp2=dp1;
        dp1=dp;
        dp=0;
    }
    return dp1;
};

let s = "226";
let res=numDecodings(s);
console.log(s);