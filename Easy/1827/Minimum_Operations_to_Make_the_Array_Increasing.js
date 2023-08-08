/**
 * Minimum Operations to Make the Array Increasing
 */
var minOperations = function(nums) {
    let count=0,prev=0;
    for (const current of nums) {
        if(current<=prev){
            prev++;
            count+=prev-current;
        }else{
            prev=current;
        }
    }
    return count;
};
let nums = [1,5,2,4,1];
let res=minOperations(nums);
console.log(res);