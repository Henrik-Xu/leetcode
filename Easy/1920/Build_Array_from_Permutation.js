/**
 * Build Array from Permutation
 * Follow-up: Can you solve it without using an extra space (i.e., O(1) memory)?
 */
var buildArray = function(nums) {
    let n=nums.length;
    for (let i = 0; i < n; i++) {
        nums[i]=nums[i]+n*(nums[nums[i]]%n);
    }
    for (let i = 0; i < n; i++) {
        nums[i]=Math.floor(nums[i]/n);
    }
    return nums;
};
let nums = [0,2,1,5,3,4];
let res=buildArray(nums);
console.log(res);