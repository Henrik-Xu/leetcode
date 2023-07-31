/**
 * XOR Operation in an Array
 */
var xorOperation = function(n, start) {
    let res=start;
    for (let i = 1; i < n; i++) {
        res ^=2*i+start;
    }
    return res;
};