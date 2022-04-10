/**
 * Next Greater Element I
 * The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
 * You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
 * For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of
 * nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
 * 
 * Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */
let nextGreaterElement = function(nums1, nums2) {
    let map = new Map();
    let stack = [];
    for (const num of nums2) {
        while(stack.length!=0 && stack[stack.length-1]<num){
            map.set(stack.pop(),num);
        }
        stack.push(num);
    }
    let res = [];
    for (const num of nums1) {
        if(map.has(num)){
            res.push(map.get(num));
        }else{
            res.push(-1);
        }
    }
    return res;
};
let nums1 = [4,1,2], nums2 = [1,3,4,2];
let res = nextGreaterElement(nums1,nums2);
console.log(res);