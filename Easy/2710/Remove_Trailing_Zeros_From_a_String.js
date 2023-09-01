/**
 * Remove Trailing Zeros From a String
 */
var removeTrailingZeros = function(num) {
    let zeros=0;
    for (let i = num.length-1; i >=0; i--) {
        if(num[i]==='0'){
            zeros++;
        }else{
            break;
        }
    }
    return num.slice(0,num.length-zeros); 
};