/**
 * Longest Even Odd Subarray With Threshold
 */
var longestAlternatingSubarray = function(nums, threshold) {
    let res=0;
    for (let i = 0; i < nums.length; i++) {
        let count=0;
        if(nums[i]%2==0 && nums[i]<=threshold){
            let j;
            for (j = i+1; j < nums.length;) {
               if(nums[j]<=threshold && nums[j]%2 !=nums[j-1]%2){
                j++;
               }else{
                break;
               }
            }
            count=j-i;
        }
        res=Math.max(res,count);
    }
    return res;
};
let nums = [1,6], threshold = 2;
let res=longestAlternatingSubarray(nums,threshold);
console.log(res);