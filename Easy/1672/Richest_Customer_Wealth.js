/**
 * Richest Customer Wealth
 */
var maximumWealth = function(accounts) {
    let max=0;
    for (const row of accounts) {
        let sum=row.reduce((a,b)=>a+b);
        max=Math.max(max,sum);
    }
    return max;
};