/**
 * House Robber
 */
let rob = function(nums) {
  if (nums.length == 0) return 0;
  let prev0 = 0;
  let prev1 = 0;
  for (const num of nums) {
    let temp = prev0;
    prev0 = Math.max(prev1 + num, prev0);
    prev1 = temp;
  }
  return prev1;
};
