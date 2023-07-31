/**
 * Running Sum of 1d Array
 */
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
       nums[i]+=nums[i-1];
    }
    return nums;
};