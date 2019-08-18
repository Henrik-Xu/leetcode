/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

let result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);

let result2 = maxProfit([1, 2, 3, 4, 5]);
console.log(result2);

let result3 = maxProfit([7, 6, 4, 3, 1]);
console.log(result3);
