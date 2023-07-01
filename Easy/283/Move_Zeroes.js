/**
 *  Move Zeroes 
 */
let moveZeroes = function(nums) {
    let index=0;
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]!=0){
            [nums[index],nums[i]]=[nums[i],nums[index]];
            index++;
        }
    }
    return nums;
}
let nums = [0,1,0,3,12];
let res=moveZeroes(nums);
console.log(res);