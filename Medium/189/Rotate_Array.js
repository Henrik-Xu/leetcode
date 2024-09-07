var rotate = function(nums, k) {
    let n=nums.length;
    k=k%n;
    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);
};
let reverse=function(arr,low,high){
    while (low<high) {
        [arr[low],arr[high]]=[arr[high],arr[low]];
        low++;
        high--;
    }
}