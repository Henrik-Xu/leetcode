/**
 * House Robber II
 */
var rob = function(nums) {
  if (nums.length == 1) return nums[0];
  let helper = function(arr) {
    let prev1 = 0,
      prev2 = 0;
    for (const num of arr) {
      let temp = prev1;
      prev1 = Math.max(prev2 + num, prev1);
      prev2 = temp;
    }
    return prev1;
  };
  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  );
};
let nums = [2, 7, 9, 3, 1];
let res = rob(nums);
console.log(res);
