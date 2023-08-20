/**
 * Number of Arithmetic Triplets
 */
var arithmeticTriplets = function(nums, diff) {
    let set=new Set(nums);
    let count=0;
    for (const num of nums) {
        if(set.has(num+diff)&&set.has(num+diff+diff)){
            count++;
        }
    }
    return count;
};