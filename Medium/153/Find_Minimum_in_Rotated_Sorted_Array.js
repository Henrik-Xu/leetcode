/**
 * Find Minimum in Rotated Sorted Array
 */
var findMin = function(nums) {
    let low=0, high=nums.length-1;
    if(nums[low]<=nums[high]){
        return nums[low];
    }
    while (low<=high) {
        let mid=low+Math.floor((high-low)/2)
        if(nums[mid]>nums[mid+1]){
            return nums[mid+1];
        }
        if(nums[mid]>nums[low]){
            low=mid+1;
        }else{
            high=mid;
        }
    }
};
let nums = [2,1];
let res=findMin(nums);
console.log(res);