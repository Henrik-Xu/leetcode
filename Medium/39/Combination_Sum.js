/**
 * Combination Sum
 */
var combinationSum = function(candidates, target) {
    let res =[];
    backtracking(res,target,[],0,candidates);
    return res;
};
let backtracking=function(res,remain,temp,start,candidates){
    if(remain<0){
        return;
    }
    if(remain==0){
        res.push([...temp]);
        return;
    }
    for (let i = start; i < candidates.length; i++) {
     temp.push(candidates[i]);
     backtracking(res,remain-candidates[i],temp,i,candidates);
     temp.pop();
    }
}
let candidates = [2,3,6,7], target = 7;
let res=combinationSum(candidates,target);
console.log(res);