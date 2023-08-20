/**
 * Min Max Game
 */
var minMaxGame = function(nums) {
    let flag=true;
    while (nums.length > 1) {
        let newNums = [];
        for (let i = 0; i < nums.length; i += 2) {
            if (i === nums.length - 1) {
                newNums.push(nums[i]);
                break;
            }
            newNums.push(flag ? Math.min(nums[i], nums[i + 1]) : Math.max(nums[i], nums[i + 1]));
            flag=!flag;
        }
        nums = newNums;
    }
    return nums[0];
};
let nums=[70,38,21,22];
let res=minMaxGame(nums);
console.log(res);