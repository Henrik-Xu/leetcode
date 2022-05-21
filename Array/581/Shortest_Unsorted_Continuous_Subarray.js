/**
 * Shortest Unsorted Continuous Subarray
 */
let findUnsortedSubarray = function(nums) {
   let start = nums.length, end = 0;
   let stack = [];
   for (let i = 0; i < nums.length; i++) {
      while (stack.length!=0 && nums[stack[stack.length-1]]>nums[i]) {
          start = Math.min(start,stack.pop());
      }
      stack.push(i);
   }
   stack =[];
   for (let i = nums.length-1; i >=0; i--) {
       while (stack.length!=0 && nums[stack[stack.length-1]]<nums[i]) {
           end = Math.max(end,stack.pop());
       }
       stack.push(i);
   }
   return (end-start>0? end-start+1:0);
};
let nums = [2,6,4,8,10,9,15];
let res = findUnsortedSubarray(nums);
console.log(res);