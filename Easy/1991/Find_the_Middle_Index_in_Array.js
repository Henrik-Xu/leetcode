/**
 * Find the Middle Index in Array
 */
var findMiddleIndex = function(nums) {
    let sum=0,leftSum=0;
    for (let i = 0; i < nums.length; i++) {
        sum+=nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        if(leftSum==sum-leftSum-nums[i]) return i;
        leftSum+=nums[i];
    }
    return -1;
};