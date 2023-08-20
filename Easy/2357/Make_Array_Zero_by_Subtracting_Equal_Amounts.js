/**
 * Make Array Zero by Subtracting Equal Amounts
 */
var minimumOperations = function(nums) {
  let set=new Set(nums);
  set.delete(0);
  return set.size;  
};