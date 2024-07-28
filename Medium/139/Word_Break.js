/**
 * Word Break
 */

// solution 1. recrusive, time limit exceeded.
var wordBreak = function(s, wordDict) {
    let set=new Set(wordDict);
    let dfs=function(s,set){
        if(s.length==0){
            return true;
        }
        for (let i = 1; i <= s.length; i++) {
            if(set.has(s.substring(0,i)) && dfs(s.substring(i),set)){
                return true;
            }
        }
        return false;
    }
    return dfs(s,set);
};

//solution 2. recrusive with memo.
var wordBreak2 = function(s, wordDict) {
    let set=new Set(wordDict);
    let memo=new Map();
    let dfs=function(s,set){
        if(s.length==0){
            return true;
        }
        if(memo.has((s))){
            return memo.get(s);
        }
        for (let i = 1; i <= s.length; i++) {
            if(set.has(s.substring(0,i)) && dfs(s.substring(i),set)){
                memo.set(s,true);
                return true;
            }
        }
        memo.set(s,false);
        return false;
    }
    return dfs(s,set);
};

//solution 3 dp
var wordBreak3 = function(s, wordDict) {
    let set=new Set(wordDict);
    let max_len=Math.max(...wordDict.map(x=>x.length));
    let dp=new Array(s.length+1).fill(false);
    dp[0]=true;
    for (let i = 1; i <=s.length; i++) {
        for (let j = i-1; j >= Math.max(i-max_len,0); j--) {
            if(dp[j] && set.has(s.substring(j,i))){
                dp[i]=true;
                break;
            }
        }
    }
    return dp[s.length];
};

let s = "leetcode", wordDict = ["leet","code"];
let res=wordBreak3(s,wordDict);
console.log(res);