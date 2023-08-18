/**
 * Count Hills and Valleys in an Array
 */
var countHillValley = function(nums) {
    let res = 0;
    for (let i = 1, j = 0; i < nums.length - 1; i++)
        if ((nums[j] < nums[i] && nums[i] > nums [i + 1]) || 
            (nums[j] > nums[i] && nums[i] < nums [i + 1])) {
            ++res;
            j = i;
        }            
    return res;
};
let nums = [2,4,1,1,6,5];
let res=countHillValley(nums);
console.log(res);