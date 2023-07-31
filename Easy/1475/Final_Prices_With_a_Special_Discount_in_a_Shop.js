/**
 * Final Prices With a Special Discount in a Shop
 */
var finalPrices = function(prices) {
  let stack=[];
  for (let i = 0; i < prices.length; i++) {
    while(stack!=null&&prices[stack[stack.length-1]]>=prices[i]){
        prices[stack.pop()]-=prices[i];
    }
    stack.push(i);
  }
  return prices;
};
let prices= [10,1,1,6];
let res=finalPrices(prices);
console.log(res);