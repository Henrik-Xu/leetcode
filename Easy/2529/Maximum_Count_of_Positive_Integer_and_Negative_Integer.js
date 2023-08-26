/**
 * Maximum Count of Positive Integer and Negative Integer
 */
var maximumCount = function(nums) {
    let pos=0,neg=0;
    for (const n of nums) {
        if(n<0){
            neg++;
        }else if(n>0){
            pos++;
        }
    }
    return Math.max(pos,neg); 
};