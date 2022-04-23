/**
 * Target Sum
 * You are given an integer array nums and an integer target.
 * You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
 * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
 * Return the number of different expressions that you can build, which evaluates to target.
 * 
 * Time Complexity: O(2^n).Size of recursion tree will be 2^n.n refers to the size of nums array.
 * Space Complexity: O(n).The depth of the recursion tree can go up to nn.
 */

let findTargetSumWays = function(nums, target) {
    let dfs = function(start,sum){
        if(start==nums.length){
            if(sum==target){
                return 1;
            }
            return 0;
        }
        let add = dfs(start+1,sum+nums[start]);
        let sub = dfs(start+1,sum-nums[start]);
        return add+sub;
    }
    return dfs(0,0);
};
let nums = [1,1,1,1,1],target = 3;
let res = findTargetSumWays(nums,target);
console.log(res);