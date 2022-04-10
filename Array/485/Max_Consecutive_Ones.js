/**
 * Max Consecutive Ones
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 */
let findMaxConsecutiveOnes = function(nums) {
   let max = 0,consecutiveOne = 0;
   for (let i = 0; i < nums.length; i++) {
      
   } 
   for (const num of nums) {
    if(num==0){
        max = Math.max(max,consecutiveOne);
        consecutiveOne =0;
    }else{
        consecutiveOne ++;
    }
   }
   max = Math.max(max,consecutiveOne);
   return max;
};
let nums = [1,1,0,1,1,1];
let res = findMaxConsecutiveOnes(nums);
console.log(res);