/**
 * Check if Array Is Sorted and Rotated
 */
var check = function(nums) {
    let k=0,n=nums.length;
    for (let i = 0; i < n; i++) {
        if(nums[i]>nums[(i+1)%n]){
            k++;
        }
        if(k>1){
            return false;
        }
    }
    return true;
};
let nums = [2,1,3,4];
let res=check(nums);
console.log(res);