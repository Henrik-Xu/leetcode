/**
 * Minimum Moves to Equal Array Elements II
 */
let minMoves2 = function(nums) {
   let i = 0,j = nums.length-1;
   nums.sort((a,b)=>a-b);
   let step = 0;
   while (i<j) {
       step+=nums[j]-nums[i];
       i++;
       j--;
   }
   return step;
};
let nums = [1,10,2,9];
let res = minMoves2(nums);
console.log(res);