/**
 * Optimal Division
 */
let optimalDivision = function(nums) {
    if(nums.length == 0)return;
    let res = nums[0]+'';
    if(nums.length==1)return res;
    if(nums.length==2){
        return res+'/'+ nums[1];
    }
    res +='/(' + nums[1];
    for (let i = 2; i < nums.length; i++) {
        res += '/'+nums[i];
    }
    res += ')';
    return res;
};
let nums = [1000,100,10,2];
let res = optimalDivision(nums);
console.log(res);