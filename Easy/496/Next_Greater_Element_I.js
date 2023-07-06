/**
 * Next Greater Element I
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