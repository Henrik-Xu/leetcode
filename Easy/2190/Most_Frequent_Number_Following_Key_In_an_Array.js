/**
 * Most Frequent Number Following Key In an Array
 */
var mostFrequent = function(nums, key) {
    let map = new Map();
    let max = 0;
    let res = 0;
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] === key) {
           map.set(nums[i + 1], map.get(nums[i + 1]) + 1 || 1);
        }
    }
    for (const [key,value] of map.entries()) {
        if(value > max) {
            max = value;
            res = key;
        }
    } 
    return res;
};