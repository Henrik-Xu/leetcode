let change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0);
    dp[0]=1;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i-coin];
        }
    }
    return dp[amount];
  };
  
  let amount = 5, coins = [1,2,5];
  let res = change(amount,coins);
  console.log(res);