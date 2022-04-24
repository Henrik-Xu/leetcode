/**
 * Predict the Winner
 */
let PredictTheWinner = function(nums) {
    let winner = function(start,end,turn){
        if(start==end){
            return turn * nums[start];
        }
        let playerA = turn * nums[start] + winner(start+1,end,-turn);
        let playerB = turn * nums[end] + winner(start,end-1,-turn);
        return turn * Math.max(turn*playerA,turn*playerB);
    }
    return winner(0,nums.length-1,1)>=0;
};
let nums = [1,5,233,7];
let res = PredictTheWinner(nums);
console.log(res);