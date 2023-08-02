/**
 * Sum of All Odd Length Subarrays
 */
var sumOddLengthSubarrays = function(arr) {
  let res=0,n=arr.length;
  for (let i = 0; i < n; i++) {
    res+=Math.floor(((i+1)*(n-i)+1)/2)*arr[i];
  }  
  return res;
};