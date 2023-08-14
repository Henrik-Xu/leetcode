/**
 * Count Number of Pairs With Absolute Difference K
 */
var countKDifference = function(nums, k) {
    let count=new Array(101).fill(0);
    for(let i=0;i<nums.length;i++){
        count[nums[i]]++;
    }
    let ans=0;
    for(let i=k+1;i<101;i++){
        ans+=count[i]*count[i-k];
    }
    return ans;
};