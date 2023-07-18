/**
 * Valid Mountain Array
 */
let validMountainArray = function(arr) {
   let i=0,j=arr.length-1,n=arr.length;
   while (i<n-1 && arr[i]<arr[i+1])i++;
   while(j>1 && arr[j]<arr[j-1])j--;
   return i<n-1 && i==j && j>0;
};