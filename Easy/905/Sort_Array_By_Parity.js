/**
 * Sort Array By Parity
 */
let sortArrayByParity = function(nums) {
    for (let i = 0, j = 0; j < nums.length; j++){
        if(nums[j]%2==0){
            [nums[i],nums[j]]=[nums[j],nums[i]];
            i++;
        }
    }
    return nums;
};
let nums = [3,1,2,4];
let res=sortArrayByParity(nums);
console.log(res);