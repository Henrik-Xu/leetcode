/**
 * Buy Two Chocolates
 */
var buyChoco = function(prices, money) {
    let first=101,second=101;
    for (const p of prices) {
        if (p<first) {
            second=first;
            first=p;
        } else if (p<second) {
            second=p;
        }
    } 
    return first+second>money?money:(money-first-second);
};