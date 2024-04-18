/**
 * Jump Game
 */
var canJump = function(nums) {
    let distance=0;
    for (let i = 0; i < nums.length && i<=distance; i++) {
        distance=Math.max(distance,i+nums[i]);
        if(distance>=nums.length-1){
            return true;
        }
    }
    return distance==nums.length;
};
let nums = [3,2,1,0,4];
let res=canJump(nums);
console.log(res);