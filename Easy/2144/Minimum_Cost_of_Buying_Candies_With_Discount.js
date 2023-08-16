/**
 * Minimum Cost of Buying Candies With Discount
 */
var minimumCost = function(cost) {
    let pay=0;
    cost.sort((a,b)=>b-a);
    for (let i = 0; i< cost.length; i+=3) {
        pay+=cost[i];
        if (i+1<cost.length){
            pay+=cost[i+1];
        }
    }
    return pay;
};
let cost = [5,5];
let res=minimumCost(cost);
console.log(res);