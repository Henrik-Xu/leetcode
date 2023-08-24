/**
 * Find Subarrays With Equal Sum
 */
var findSubarrays = function(nums) {
  let set=new Set();
  for (let i = 1; i < nums.length; i++) {
    let sum=nums[i]+nums[i-1];
    if(set.has(sum)){
        return true;
    }else {
        set.add(sum);
    }
  } 
  return false;
};