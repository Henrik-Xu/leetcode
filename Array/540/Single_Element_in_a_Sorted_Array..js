/**
 *  Single Element in a Sorted Array
 */
let singleNonDuplicate = function(nums) {
    let start = 0, end = nums.length -1;
    while (start<end) {
        let middle = start + Math.floor((end-start)/2);
        if(middle % 2 == 0){
            // if mid in at even index and assume the single element is not in the left part(nums[0 : mid + 1] inclusively)
            // the number in mid and the next number should be the same; otherwise, it is in the left part: nums[0 : mid] inclusively
            if(nums[middle] == nums[middle+1]){
                start = middle + 2;
            }else{
                end = middle;
            }
        }else{
            if(nums[middle] == nums[middle-1]){
                start = middle + 1;
            }else{
                end = middle;
            }
        }
    }
    return nums[start];
};
let nums = [1,1,2,3,3,4,4,8,8];
let res = singleNonDuplicate(nums);
console.log(res);