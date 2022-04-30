/**
 * Next Greater Element II
 * Time complexity : O(n^2). The complete numsnums array of size nn is scanned for all the elements of numsnums in the worst case.
 * Space complexity : O(n). resres array of size nn is used.
 */
let nextGreaterElements = function(nums) {
   let res = new Array(nums.length).fill(-1);
   for (let i = 0; i < nums.length; i++) {
      for (let j = 1; j < nums.length; j++) {
          if(nums[(i+j)%nums.length]>nums[i]){
              res[i]=nums[(i+j)%nums.length];
              break;
          }
      }
   } 
   return res;
};

let nums = [1,2,3,4,3];
let res = nextGreaterElements(nums);
console.log(res);