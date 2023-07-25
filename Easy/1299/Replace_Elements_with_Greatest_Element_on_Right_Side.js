/**
 * Replace Elements with Greatest Element on Right Side
 */
let replaceElements = function(arr) {
    for (let i = arr.length-1,max=-1; i>=0; i--) {
        let temp=arr[i];
        arr[i]=max;
        max=Math.max(temp,max);
    }
    return arr;
};