/**
 * Number of Common Factors
 */
var commonFactors = function(a, b) {
    let cnt = 0;
    let n = (Math.min(a, b) + 1);
    
    for (let i = 0; i <= n; i++){
        if (a % i === 0 && b % i === 0) {
            cnt++;
        }
    }
    return cnt;
};