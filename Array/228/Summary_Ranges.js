/**
 * Summary Ranges
 */
let summaryRanges = function(nums) {
  let res = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] + 1 == nums[i + 1]) {
      i++;
      end++;
    }
    if (start == end) {
      res.push("" + nums[start]);
    } else {
      res.push(nums[start] + "->" + nums[end]);
    }
    end++;
    start = end;
  }
  return res;
};
