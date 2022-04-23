/**
 * Complexity
 * Time Complexity：O(t*n) The memo array of size O(t \cdot n)O(t⋅n) has been filled just once. 
 * Here, t refers to the sum of the nums array and n refers to the length of the nums array.
 * Space complexity:O(t⋅n). The depth of recursion tree can go up to n. The memo array contains t * n elements.
 */
let findTargetSumWays = function(nums, target) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    if(Math.abs(target)>total){
        return 0;
    }
    let memo = new Array(nums.length+1).fill(Number.MIN_SAFE_INTEGER).map(()=>new Array(2*total+1).fill(Number.MIN_SAFE_INTEGER));
    let dfs = function(start,sum){
        if(memo[start][total+sum]!=Number.MIN_SAFE_INTEGER){
            return memo[start][total+sum];
        }
        if(start==nums.length){
            if(sum==target){
                return 1;
            }
            return 0;
        }
        let add = dfs(start+1,sum+nums[start]);
        let sub = dfs(start+1,sum-nums[start]);
        memo[start][total+sum] = add+sub;
        return add+sub;
    }
    return dfs(0,0);
};
let nums = [1,1,1,1,1],target = 3;
let res = findTargetSumWays(nums,target);
console.log(res);