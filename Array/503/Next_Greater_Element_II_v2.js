/**
 *  Next Greater Element II 
 *  Time complexity : O(n). Only two traversals of the numsnums array are done. Further, atmost 2n elements are pushed and popped from the stack.
 *  Space complexity : O(n). A stack of size n is used. res array of size nn is used.
 */
let nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1);
    let stack = [];
    for (let i = 2 * nums.length - 1; i >=0; i--) {
        let index = i % nums.length;
        while (stack.length!=0 && nums[stack[stack.length-1]] <= nums[index]) {
            stack.pop();
        }
        res[index] = stack.length==0?-1:nums[stack[stack.length-1]];
        stack.push(index);
    }
    return res;
};
let nums = [1,2,3,4,3];
let res = nextGreaterElements(nums);
console.log(res)    ;