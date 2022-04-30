/**
 * Coin Change 2
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.
 * You may assume that you have an infinite number of each kind of coin.
 * The answer is guaranteed to fit into a signed 32-bit integer.
 * 
 * 
 * dp[i][j] : the number of combinations to make up amount j by using the first i types of coins
 * State transition:
 *  1. not using the ith coin, only using the first i-1 coins to make up amount j, then we have dp[i-1][j] ways.
 *  2. using the ith coin, since we can use unlimited same coin, we need to know how many ways to make up amount j - coins[i-1] 
 *  by using first i coins(including ith), which is dp[i][j-coins[i-1]]
 */
let change = function(amount, coins) {
  let dp = new Array(coins.length+1).fill(0).map(()=>new Array(amount+1).fill(0));
  dp[0][0] = 1;
  
  for (let i = 1; i <= coins.length; i++) {
      dp[i][0] = 1;
      for (let j = 1; j <= amount; j++) {
          dp[i][j] = dp[i-1][j];
          if(j-coins[i-1]>=0){
              dp[i][j]+=dp[i][j-coins[i-1]];
          }
       }
    }
    return dp[coins.length][amount];
};

let amount = 5, coins = [1,2,5];
let res = change(amount,coins);
console.log(res);