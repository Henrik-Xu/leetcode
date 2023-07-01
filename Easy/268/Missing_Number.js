/**
 * Missing Number
 */
let missingNumber = function(nums) {
    let sum=0,n=nums.length;
    for (let i = 0; i <=n; i++) {
       sum+=i;
    }
    for (const num of nums) {
        sum-=num;
    }
    return sum;
};