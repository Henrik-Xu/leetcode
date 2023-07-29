/**
 * Minimum Value to Get Positive Step by Step Sum
 */
var minStartValue = function(nums) {
    let min=0,prefixSum=0;
    for (const n of nums) {
        prefixSum+=n;
        min=Math.min(min,prefixSum);
    }
    return 1-min;
};