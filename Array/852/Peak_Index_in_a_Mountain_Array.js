/**
 * Peak Index in a Mountain Array
 */
let peakIndexInMountainArray = function(arr) {
   let l=0,r=arr.length-2;
   while (l<r) {
    let mid=l+Math.floor((r-l)/2);
    if(arr[mid]<arr[mid+1]){
        l=mid+1;
    }else{
        r=mid;
    }
   }
   return l;
};
let arr= [0,2,1,0];
let res=peakIndexInMountainArray(arr);
console.log(res);