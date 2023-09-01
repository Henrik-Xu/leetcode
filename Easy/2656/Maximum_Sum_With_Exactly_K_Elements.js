/**
 * Maximum Sum With Exactly K Elements
 */
var maximizeSum = function(nums, k) {
    let max=-1;
    for (const n of nums) {
        max=Math.max(max,n);
    }
    let sum=0;
    for (let i = 0; i < k; i++) {
        sum+=max;
        max++;
    }
    return sum;
};