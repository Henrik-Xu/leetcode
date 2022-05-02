/**
 * Continuous Subarray Sum
 * We iterate through the input array exactly once, Keeping track of the running sum mod k of the elements in the process.
 * If we find that a running sum value at index j has been previously seen before in some earlier index i in the array,
 * then we know that sub-array(i,j] contains a desired sum.
 * 
 * 1. Running sum from first element to index i : sum_i. If we mod k, it will be some format like : sum_i = k * x + modk_1
 * 2. Running sum from first element to index j : sum_j. If we mod k, it will be some format like : sum_j = k * y + modk_2
 * If they have the same mod, which is modk_1 == modk_2, subtracting these two running sum we get the difference sum_i - sum_j = (x - y) * k = constant * k, 
 * and the difference is the sum of elements between index i and j, and the value is a multiple of k.
 */
let checkSubarraySum = function(nums, k) {
    let map = new Map();
    map.set(0,-1);
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];
        if(k!=0)runningSum %=k;
        let prev = map.get(runningSum);
        if(prev!=null){
            if(i-prev>1)return true;
        }else{
            map.set(runningSum,i);
        }
    }
    return false;
};
let nums = [23,2,6,4,7], k = 6;
let res = checkSubarraySum(nums,k);
console.log(res);