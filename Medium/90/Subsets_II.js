/**
 * Subsets II
 */
var subsetsWithDup = function(nums) {
    let res=[];
    nums.sort((a,b)=>a-b);
    let backtracking=function(start,temp){
        res.push([...temp]);
        for (let i = start; i < nums.length; i++) {
            if(i>start && nums[i]==nums[i-1])continue;
            temp.push(nums[i]);
            backtracking(i+1,temp);
            temp.pop();
        }
    }
    backtracking(0,[]);
    return res;
};
let nums = [1,2,2];
let res=subsetsWithDup(nums);
console.log(res);