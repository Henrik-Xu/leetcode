/**
 * Divide Array Into Equal Pairs
 */
var divideArray = function(nums) {
    let map=new Map();
    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1);
    }
    for (const value of map.entries()) {
        if(value[1]%2!==0) return false;
    }
    return true;
};