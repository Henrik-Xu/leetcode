/**
 * Find All Numbers Disappeared in an Array
 * Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
 */
let findDisappearedNumbers = function (nums) {
    for (let i = 0; i < nums.length; i++) {
      let index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      }
    }
    let res = [];
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        res.push(i + 1);
      }
    }
    return res;
  };
let nums = [4,3,2,7,8,2,3,1];
let res=findDisappearedNumbers(nums);
console.log(res);