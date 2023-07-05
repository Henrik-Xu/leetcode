/**
 * Arranging Coins
 */
let arrangeCoins = function(n) {
    let i=1;
    while (n>0) {
        i++;
        n-=i;
    }
    return i-1;
};
let n = 5;
let res=arrangeCoins(n);
console.log(res);