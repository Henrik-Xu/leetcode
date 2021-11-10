/**
 * House Robber
 */
let rob = function(nums) {
  if (nums.length == 0) return 0;
  let prev1 = 0;
  let prev2 = 0;
  for (const num of nums) {
    let temp = prev1;
    prev1 = Math.max(prev2 + num, prev1);
    prev2 = temp;
  }
  return prev1;
};
let nums = [1, 2, 3, 1];
let res = rob(nums);
console.log(res);
