/**
 * Sort Array By Parity II
 * Follow Up: Could you solve it in-place?
 */
let sortArrayByParityII = function(nums) {
    for (let i = 0,j=1; i < nums.length; i+=2,j+=2) {
      while (i<nums.length && nums[i]%2==0) {
        i+=2;
      }
      while (j<nums.length && nums[j]%2==1) {
        j+=2;
      }
      if(i<nums.length){
        [nums[i],nums[j]]=[nums[j],nums[i]];
      }
    }
    return nums;
};
let nums = [4,2,5,7];
let res=sortArrayByParityII(nums);
console.log(res);