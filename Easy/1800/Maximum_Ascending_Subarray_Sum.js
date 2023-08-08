/**
 * Maximum Ascending Subarray Sum
 */
var maxAscendingSum = function(nums) {
    let sum = nums[0],res=nums[0];
    for (let i = 1; i < nums.length; i++) {
        if(nums[i]>nums[i-1]){
            sum+=nums[i];
        }else{
            sum=nums[i];
        }
        res=Math.max(res,sum); 
    }
    return res;
};
let nums = [10,20,30,5,10,50];
let res=maxAscendingSum(nums);
console.log(res);