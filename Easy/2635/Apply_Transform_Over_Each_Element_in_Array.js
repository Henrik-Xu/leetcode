/**
 * Apply Transform Over Each Element in Array
 */
var map = function(arr, fn) {
    let res=[];
    for (let i = 0; i < arr.length; i++) {
        const element = fn(arr[i],i);
        res.push(element);
    }
    return res;
};