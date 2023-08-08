/**
 * Minimum Distance to the Target Element
 */
var getMinDistance = function(nums, target, start) {
    let min=nums.length;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]==target){
            let temp= Math.abs(i-start);
            min=Math.min(min,temp);
        }
    }
    return min;
};