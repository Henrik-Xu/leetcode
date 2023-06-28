/**
 * Majority Element
 */
let majorityElement = function(nums) {
    let candidate=nums[0],count=1;
    for (let i = 1; i < nums.length; i++) {
        if(count==0){
            candidate=nums[i];
        }
        count+=candidate==nums[i]?1:-1;
    }
    return candidate;
};
let nums = [2,2,1,1,1,2,2];
let res=majorityElement(nums);
console.log(res);