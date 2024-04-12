/**
 * Permutations II
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function(nums) {
    let res = [];
    let used = new Map();
    nums.sort((a,b)=>a-b);
    backtracking(res,nums,used,[]);
    return res;
  };
  let backtracking = function(res,nums,used,temp){
      if(temp.length == nums.length){
          res.push([...temp]);
          return; 
      }
      for (let i = 0; i < nums.length; i++) {
        if(used.get(i))continue;
        if(i>0 && nums[i]==nums[i-1] && !used.get(i-1))continue;
        temp.push(nums[i]);
        used.set(i,true);
        backtracking(res,nums,used,temp);
        temp.pop();
        used.set(i,false);
      }
  }