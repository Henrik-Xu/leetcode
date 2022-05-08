/**
 * Contiguous Array
 * Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.   
 */
let findMaxLength = function(nums) {
    let maxLen = 0;
    for (let start = 0; start < nums.length; start++) {
        let zeros = 0, ones = 0;
        for (let end = start; end < nums.length; end++) {
            if(nums[end]==0){
                zeros++;
            }else{
                ones ++;
            }
            if(zeros==ones){
                maxLen = Math.max(maxLen,end-start+1);
            }
        }
    }
    return maxLen;
};