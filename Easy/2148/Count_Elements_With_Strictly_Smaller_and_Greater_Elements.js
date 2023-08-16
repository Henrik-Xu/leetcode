/**
 * Count Elements With Strictly Smaller and Greater Elements
 */
var countElements = function(nums) {
    let max=Number.MIN_SAFE_INTEGER,min=Number.MAX_SAFE_INTEGER;
    for (const n of nums) {
        max=Math.max(max,n);
        min=Math.min(min,n);
    }
    let count=0;
    for (const n of nums) {
        if (n>min && n<max) {
            count++;
        }    
    }
    return count;
};