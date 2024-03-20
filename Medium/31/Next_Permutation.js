/**
 * Next Permutation
 */
var nextPermutation = function(nums) {
    let index=nums.length-2;
    while (index>=0 && nums[index]>= nums[index+1]) {
        index--;
    }
    if(index>=0){
        let end=nums.length-1;
        while (nums[end]<nums[index]) {
            end--;
        }
        swap(nums,index,end);
    }
    reverse(nums,index+1);
    return nums;
};
let swap=function(arr,i,j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
}
let reverse=function(arr,start){
    let end=arr.length-1;
    while (start<end) {
        swap(arr,start,end);
        start++;
        end--;
    }
}

let nums = [3,2,1];
let res=nextPermutation(nums);
console.log(res);