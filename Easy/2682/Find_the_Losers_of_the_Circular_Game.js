/**
 * Find the Losers of the Circular Game
 */
var circularGameLosers = function(n, k) {
    let seen=new Set();
    let count=0,i=0;
    while(!seen.has(i%n)){
        count++;
        seen.add(i%n);
        i+=count*k;
    }
    let res=[];
    for (let i = 1; i < n; i++) {
        if(!seen.has(i)) res.push(i+1);
    }
    return res;
};
let n = 5, k = 2;
let res=circularGameLosers(n,k);
console.log(res);