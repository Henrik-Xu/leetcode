/**
 * Max Consecutive Ones
 */
let findMaxConsecutiveOnes = function(nums) {
    let max = 0,consecutiveOne = 0;
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