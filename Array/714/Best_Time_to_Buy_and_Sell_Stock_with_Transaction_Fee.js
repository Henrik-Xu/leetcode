/**
 * Best Time to Buy and Sell Stock with Transaction Fee
For future readers:
If I am holding a share after today, then either I am just continuing holding the share I had yesterday, 
or that I held no share yesterday, but bought in one share today: hold = max(hold, cash - prices[i])
If I am not holding a share after today, then either I did not hold a share yesterday, or that I held
a share yesterday but I decided to sell it out today: cash = max(cash, hold + prices[i] - fee).
Make sure fee is only incurred once.} prices 
 */
let maxProfit = function (prices, fee) {
  let cash = 0, hold = -prices[0];
  for (let i = 1; i < prices.length; i++) {
    cash = Math.max(cash, hold + prices[i] - fee);
    hold = Math.max(hold, cash - prices[i]);
  }
  return cash;
};
