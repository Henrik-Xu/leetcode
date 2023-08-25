/**
 * Apply Operations to an Array
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length-1; i++) { 
        if(nums[i]!=nums[i+1])continue;
        nums[i] = nums[i+1]*2;
        nums[i+1]=0;
        i++;
    }
    let slow=0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=0){
            nums[slow++]=nums[i];
        }
    }
    for (let i = slow; i < nums.length; i++) {
        nums[i]=0;
    }
    return nums;
};
let nums = [1,2,2,1,1,0];
let res=applyOperations(nums);
console.log(res);