/**
 * Sum of Squares of Special Elements
 */
var sumOfSquares = function(nums) {
    let n=nums.length;
    let res=0;
    for (let i = 1; i <= n; i++) {
        if(n%i==0){
            res+=nums[i-1]*nums[i-1];
        }
    }
    return res;
};