/**
 * Monotonic Array
 */
let isMonotonic = function (nums) {
    let increase=true,decrese=true;
    for (let i = 0; i < nums.length-1; i++) {
       if(nums[i]>nums[i+1])increase=false;
       if(nums[i]<nums[i+1])decrese=false;
    }
    if(increase==false && decrese==false){
        return false;
    }
    return true;
};
let nums= [1,3,2];
let res=isMonotonic(nums);
console.log(res);