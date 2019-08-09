/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;
  let length = prices.length;
  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      if (prices[j] > prices[i] && prices[j] - prices[i] > result) {
        result = prices[j] - prices[i];
      }
    }
  }
  return result;
};

let result = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(result);

let result_2 = maxProfit([7, 6, 4, 3, 1]);
console.log(result_2);
