/**
 * Smallest Range I
 */
let smallestRangeI = function(nums, k) {
    let max=nums[0],min=nums[0];
    for (const num of nums) {
        max=Math.max(max,num);
        min=Math.min(min,num);
    }
    return Math.max(0,(max-min)-2*k);
};
let nums = [1], k = 0;
let res=smallestRangeI(nums,k);
console.log(res);