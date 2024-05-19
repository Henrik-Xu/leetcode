/**
 * Subsets
 */
let subsets = function (nums) {
    let res = [];
    let backtracking = function (temp, start) {
      res.push([...temp]);
      for (let i = start; i < nums.length; i++) {
        temp.push(nums[i]);
        backtracking(temp, i + 1);
        temp.pop();
      }
    }
    backtracking([], 0);
    return res;
  };
let nums = [1,2,3];
let res=subsets(nums);
console.log(res);