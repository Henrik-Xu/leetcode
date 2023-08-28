/**
 * Left and Right Sum Differences
 */
var leftRightDifference = function(nums) {
    let leftSum=0,rightSum=0,n=nums.length;
    for (let i = 0; i < n; i++) {
        rightSum+=nums[i];
    }
    let res=[];
    for (let i = 0; i < n; i++) {
        rightSum-=nums[i];
        res.push(Math.abs(leftSum-rightSum));
        leftSum+=nums[i];
    };
    return res;
};
let nums = [10,4,8,3];
let res=leftRightDifference(nums);
console.log(res);