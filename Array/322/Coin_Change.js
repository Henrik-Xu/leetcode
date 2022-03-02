/**
 * Coin Change
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */
var coinChange = function(coins, amount) {
  if (amount < 1) return 0;
  let dp = new Array(amount + 1).fill(0);
  for (let d = 1; d < dp.length; d++) {
    let min = -1;
    for (const coin of coins) {
      if (d >= coin && dp[d - coin] != -1) {
        let temp = dp[d - coin] + 1;
        if (min < 0 || temp < min) {
          min = temp;
        }
      }
    }
    dp[d] = min;
  }
  return dp[amount];
};

let coins = [1, 2, 5],
  amount = 11;
let res = coinChange(coins, amount);
console.log(res);
