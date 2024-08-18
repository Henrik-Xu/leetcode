/**
 * Find Peak Element
 */
var findPeakElement = function(nums) {
    if(nums.length == 1) return 0; // single element
    
    let n = nums.length;
    // check if 0th/n-1th index is the peak element
    if(nums[0] > nums[1]) return 0;
    if(nums[n-1] > nums[n-2]) return n-1;

    let low=1,high=n-2;
    while (low<=high) {
        let mid=low+Math.floor((high-low)/2);
        if(nums[mid]>nums[mid-1] && nums[mid]>nums[mid+1]){
            return mid;
        }else if(nums[mid]<nums[mid-1]){
            high=mid-1;
        }else if(nums[mid]<nums[mid+1]){
            low=mid+1;
        }
    }
};