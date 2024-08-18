/**
 * Maximum Product Subarray
 */
var maxProduct = function(nums) {
    let n=nums.length,min=nums[0],max=nums[0];
    let res=nums[0];
    for (let i = 1; i < n; i++) {
       if(nums[i]<0){
        [min,max]=[max,min];
       }
       min=Math.min(nums[i],nums[i]*min);
       max=Math.max(nums[i],nums[i]*max);

       res=Math.max(res,max);
    }
    return res;
};

let nums =[2,3,-2,4];
let res=maxProduct(nums);
console.log(res);