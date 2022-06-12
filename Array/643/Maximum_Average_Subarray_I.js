/**
 * Maximum Average Subarray I
 */
let findMaxAverage = function(nums, k) {
    let sums = new Array(nums.length).fill(0);
    sums[0]=nums[0];
    for (let i = 1; i < nums.length; i++) {
        sums[i]=nums[i]+sums[i-1];
    }
    let res = Number.MIN_SAFE_INTEGER;
    for (let i = k; i < nums.length; i++) {
        res = Math.max(res,(sums[i]-sums[i-k])*1.0/k);
    }
    return res;
};