/**
 * Sort Colors
 */
var sortColors = function(nums) {
    let red=0,white=0,blue=nums.length-1;
    while (white<=blue) {
        if(nums[white]==0){
            [nums[red],nums[white]]=[nums[white],nums[red]];
            red++;
            white++;
        }else if(nums[white]==2){
            [nums[white],nums[blue]]=[nums[blue],nums[white]];
            blue--;
        }else{
            white++;
        }
    }
};
let nums = [2,0,2,1,1,0];
let res=sortColors(nums);
console.log(res);