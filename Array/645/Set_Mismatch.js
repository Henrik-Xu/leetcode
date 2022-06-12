/**
 * Set Mismatch
 */
let findErrorNums = function(nums) {
    let arr = new Array(nums.length+1).fill(0);
    let dup = -1, missing = 1;
    for (let i = 0; i < nums.length; i++) {
        arr[nums[i]] +=1;
    }
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==0){
            missing = i;
        }else if(arr[i] == 2){
            dup = i;
        }
    }
    return [dup,missing];
};