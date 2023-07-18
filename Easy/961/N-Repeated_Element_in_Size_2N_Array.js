/**
 * N-Repeated Element in Size 2N Array
 */
let repeatedNTimes = function(nums) {
    let count=new Array(10000).fill(0);
    for (const n of nums) {
        if(count[n]++==1){
            return n;
        }
    }
    return -1;
};