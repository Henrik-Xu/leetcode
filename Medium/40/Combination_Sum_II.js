/**
 * Combination Sum II
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let res=[];
    backtracking(res,[],0,candidates,target);
    return res;
};
let backtracking=function(res,temp,start,candidates,remain){
    if(remain<0){
        return;
    }
    if(remain==0){
        res.push([...temp]);
        return;
    }
    for (let i = start; i < candidates.length; i++) {
        if(i>start && candidates[i]==candidates[i-1] || remain<0)continue;
        temp.push(candidates[i]);
        backtracking(res,temp,i+1,candidates,remain-candidates[i]);
        temp.pop();
    }
}
let candidates = [10,1,2,7,6,1,5], target = 8;
let res=combinationSum2(candidates,target);
console.log(res);