/**
 * Increasing Subsequences
 * Given an integer array nums, return all the different possible increasing subsequences of the given array with at least two elements. 
 * You may return the answer in any order.
 * The given array may contain duplicates, and two equal integers should also be considered a special case of increasing sequence.
 */
let dfs = function(res,temp,nums,start){
    if(temp.length>=2){
        res.push([...temp]);
    }
    let used = new Set();
    for (let i = start; i < nums.length; i++) {
        if(used.has(nums[i]))continue;
        if(temp.length==0 || nums[i]>=temp[temp.length-1]){
            temp.push(nums[i]);
            used.add(nums[i]);
            dfs(res,temp,nums,i+1);
            temp.pop();
        }
    }
}
let findSubsequences = function(nums) {
    let res = [];
    dfs(res,[],nums,0);
    return res;
};

let nums = [4,6,7,7];
let res = findSubsequences(nums);
console.log(res);