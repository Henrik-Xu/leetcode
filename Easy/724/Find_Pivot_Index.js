/**
 * Find Pivot Index
 */
let pivotIndex = function(nums) {
   let sum=0,leftSum=0;
   for (const num of nums) {
    sum+=num;
   } 
   for (let i = 0; i < nums.length; i++) {
    if(leftSum==sum-leftSum-nums[i]){
        return i;
    }
    leftSum+=nums[i];
   }
   return -1;
};
let nums = [2,1,-1];
let res=pivotIndex(nums);
console.log(res);