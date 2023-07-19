/**
 * Maximize Sum Of Array After K Negations
 */
let largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    for (let i = 0; k>0 && i<nums.length && nums[i]<0; i++,k--) {
        nums[i]=-nums[i];        
    }
    let res=0,min=Number.MAX_VALUE;
    for (const a of nums) {
        res+=a;
        min=Math.min(min,a);
    }
    return res-(k%2)*min*2;
};