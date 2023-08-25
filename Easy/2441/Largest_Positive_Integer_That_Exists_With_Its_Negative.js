/**
 * Largest Positive Integer That Exists With Its Negative
 */
var findMaxK = function(nums) {
    let set=new Set(nums);
    let max=-Infinity;
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0)continue;
        if(set.has(-nums[i])){
            max=Math.max(max,nums[i]);
        }
    };
    return max==-Infinity?-1:max;
};
let nums=[-10,8,6,7,-2,-3];
let res=findMaxK(nums);
console.log(res);