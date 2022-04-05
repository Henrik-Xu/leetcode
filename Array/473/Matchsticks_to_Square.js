/**
 * Matchsticks to Square
 * You are given an integer array matchsticks where matchsticks[i] is the length of the ith matchstick. You want to use all the
 * matchsticks to make one square. You should not break any stick, but you can link them up, and each matchstick must be used exactly
 * one time.
 * Return true if you can make this square and false otherwise.
 */
let dfs = function(matchsticks,index,sums,target){
    if(index == matchsticks.length){
        if(sums[0]==target && sums[1]==target && sums[2]==target){
            return true;
        }
        return false;
    }
    for (let i = 0; i < 4; i++) {
        if(sums[i]+matchsticks[index]>target)continue;
        sums[i]+=matchsticks[index];
        if(dfs(matchsticks,index+1,sums,target))return true;
        sums[i]-=matchsticks[index];
    }
    return false;
}
let makesquare = function(matchsticks) {
    if(matchsticks==null || matchsticks.length<4)return false;
    let sum = 0;
    for (const num of matchsticks) {
        sum+=num;
    }
    if(sum%4!=0){
        return false;
    }
    matchsticks.sort((a,b)=>b-a);
    let sums = new Array(4).fill(0);
    return dfs(matchsticks,0,sums,sum/4);
};