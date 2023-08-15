/**
 * Smallest Index With Equal Value
 */
var smallestEqual = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if(i%10==nums[i])return i;
    }
    return -1;
};