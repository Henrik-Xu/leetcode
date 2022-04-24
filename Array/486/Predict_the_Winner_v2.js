/**
 * Predict the Winner
 */
 let PredictTheWinner = function(nums) {
    let memo = new Array(nums.length).fill(0).map(()=>new Array(nums.length).fill(0));
    let winner = function(start,end,memo){
        if(start==end){
            return nums[start];
        }
        if(memo[start][end]!=0){
            return memo[start][end];
        }
        let playerA = nums[start] + winner(start+1,end,memo);
        let playerB = nums[end] + winner(start,end-1,memo);
        memo[start][end] = Math.max(playerA,playerB);
        return memo[start][end];
    }
    return winner(0,nums.length-1,memo)>=0;
};
let nums = [1,5,233,7];
let res = PredictTheWinner(nums);
console.log(res);