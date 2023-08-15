/**
 * Kth Distinct String in an Array
 */
var kthDistinct = function(arr, k) {
    let map=new Map();
    for (const num of arr) {
        map.set(num,map.get(num)+1||1);
    }
    for (const [key,value] of map.entries()) {
        if (value===1) {
            k--;
        }
        if (k===0) {
            return key;
        }
    }
    return '';
};