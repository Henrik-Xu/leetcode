/**
 * Find N Unique Integers Sum up to Zero
 */
let sumZero = function(n) {
    let result=new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        result[i]=i*2-n+1;
    }
    return result;
};