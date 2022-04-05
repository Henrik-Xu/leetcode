/**
 * 132 Pattern
 * Given an array of n integers nums, a 132 pattern is a subsequence of three integers nums[i], nums[j] and nums[k] 
 * such that i < j < k and nums[i] < nums[k] < nums[j].
 * Return true if there is a 132 pattern in nums, otherwise, return false.
 */
let find132pattern = function(nums) {
    if(nums == null || nums.length<3){
        return false;
    }
    for (let i = 0; i < nums.length-2; i++) {
        let one = nums[i];
        let two = nums[i];
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j]<=one){
                continue;
            }
            if(nums[j]>=two){
                two = nums[j];
            }else{
                return true;
            }
        }        
    }
    return false;
};
let nums = [-2,1,1];
let res = find132pattern(nums);
console.log(res);