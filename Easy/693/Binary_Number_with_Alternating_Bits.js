/**
 * Binary Number with Alternating Bits
 */
let hasAlternatingBits = function(n) {
    let arr=[...n.toString(2)];
    for (let i = 1; i < arr.length; i++) {
        if(arr[i-1]==arr[i] || (i+1<arr.length && arr[i+1]==arr[i]) ){
            return false;
        }        
    }  
    return true;
};