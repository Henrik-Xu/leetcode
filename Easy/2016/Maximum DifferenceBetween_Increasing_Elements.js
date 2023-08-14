/**
 * Maximum Difference Between Increasing Elements
 */
var maximumDifference = function(nums) {
    let min=nums[0],res=-1;
    for (let i = 0; i < nums.length; i++) {
        res=Math.max(res,nums[i]-min);
        min=Math.min(min,nums[i]);
    }
    return res==0?-1:res;
};
let nums = [7,1,5,4];
let res=maximumDifference(nums);
console.log(res);