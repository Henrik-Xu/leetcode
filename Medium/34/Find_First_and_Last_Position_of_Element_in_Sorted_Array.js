/**
 * Find First and Last Position of Element in Sorted Array
 */
var searchRange = function(nums, target) {
    let low=0,high=nums.length-1;
    let res=[-1,-1];
    while (low<high) {
        let mid=low+Math.floor((high-low)/2);
        if(nums[mid]==target){
            let left =mid,right=mid;
            while (left>=0 && nums[left-1]==target) {
                left--;
            }
            while (right<nums.length && nums[right+1]==target) {
                right++;
            }
            res=[left,right];
            return res;
        }else if(nums[mid]>target){
            high=mid-1;
        }else{
            low=mid+1;
        }
    }
    return res;
};
let nums = [5,7,7,8,8,10], target = 8;
let res=searchRange(nums,target);
console.log(res);