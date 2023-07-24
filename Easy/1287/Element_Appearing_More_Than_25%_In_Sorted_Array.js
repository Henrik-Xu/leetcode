/**
 * Element Appearing More Than 25% In Sorted Array
 */
var findSpecialInteger = function(arr) {
    let t=Math.floor(arr.length/4);
    for (let i = 0; i < arr.length-t; i++) {
        if(arr[i]==arr[i+t]){
            return arr[i];
        }
    }
    return -1;
};