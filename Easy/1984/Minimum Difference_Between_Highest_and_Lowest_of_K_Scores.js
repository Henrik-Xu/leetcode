/**
 * Minimum Difference Between Highest and Lowest of K Scores
 */
var minimumDifference = function(nums, k) {
    nums.sort((a,b) => a-b);
    let res=Number.MAX_SAFE_INTEGER;
    for (let i = k-1; i < nums.length; i++) {
        let diff=Math.min(nums[i]-nums[i-k+1]);
        res=Math.min(res,diff);
    }
    return res;
};
let nums=[1],k=1;
let res=minimumDifference(nums,k);
console.log(res);