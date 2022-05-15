/**
 * Array Nesting
 */
let arrayNesting = function(nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
       if(nums[i]==-1)continue;
       let start = nums[i], count = 0;
       while (nums[start]!=-1) {
           let temp = start;
           start = nums[start];
           count++;
           nums[temp] =-1;
       }
        res = Math.max(res,count);
    }
    return res;
};
let nums = [5,4,0,3,1,6,2];
let res = arrayNesting(nums);
console.log(res);