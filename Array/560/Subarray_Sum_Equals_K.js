/**
 * Subarray Sum Equals K
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 */
let subarraySum = function(nums, k) {
   let map = new Map();
   map.set(0,1);
   let sum = 0,count = 0;
   for (const num of nums) {
       sum+=num;
       if(map.has(sum-k)){
           count+=map.get(sum-k);
       }
       if(map.has(sum)){
           map.set(sum,map.get(sum)+1);
       }else{
           map.set(sum,1);
       }
   }
   return count;
};

let nums = [-1,-1,1], k = 0;
let res = subarraySum(nums,k);
console.log(res);