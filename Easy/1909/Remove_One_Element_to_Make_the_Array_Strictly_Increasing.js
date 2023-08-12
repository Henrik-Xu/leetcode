/**
 * Remove One Element to Make the Array Strictly Increasing
 */
var canBeIncreasing = function(nums) {
    let count = 0
    for(let i=1; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            count++;
            if(i>1 && nums[i] <= nums[i-2]) nums[i] = nums[i-1]
        }
    }
    return count <= 1
};
let nums = [1,5,10,2,11];
let res=canBeIncreasing(nums);
console.log(res);