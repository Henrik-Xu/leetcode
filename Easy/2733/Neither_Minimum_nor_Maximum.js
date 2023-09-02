/**
 * Neither Minimum nor Maximum
 */
var findNonMinOrMax = function(nums) {
    let min=101,max=-1,res=-1;
    for(let i=0;i<nums.length;i++){
        min=Math.min(min,nums[i]);
        max=Math.max(max,nums[i]);
    }
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=min && nums[i]!=max){
            res=nums[i];
            break;
        }
    }
    return res;
};
let nums =
[6,4];
let res=findNonMinOrMax(nums);
console.log(res);