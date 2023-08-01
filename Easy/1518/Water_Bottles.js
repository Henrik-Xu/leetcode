/**
 * Water Bottles
 */
var numWaterBottles = function(numBottles, numExchange) {
    let empty=numBottles;
    let res=numBottles;
    while (empty>=numExchange) {
        let remain=empty%numExchange;
        let full=(empty-remain)/numExchange;
        empty=remain+full;
        res+=full;
    }
    return res;
};
let numBottles = 15, numExchange = 4;
let res=numWaterBottles(numBottles,numExchange);
console.log(res);