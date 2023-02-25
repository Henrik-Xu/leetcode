/**
 * Largest Number At Least Twice of Others
 */
let dominantIndex = function(nums) {
  let max=-1,second=-1,index=-1;
  for (let i = 0; i < nums.length; i++) {
   if(nums[i]>max){
    second=max;
    max=nums[i];
    index=i;
   }else if(nums[i]>second){
    second=nums[i];
   }
  }
  return second*2<=max?index:-1;
};
let nums = [3,6,1,0];
let res = dominantIndex(nums);
console.log(res);