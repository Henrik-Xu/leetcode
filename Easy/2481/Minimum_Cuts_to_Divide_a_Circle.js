/**
 * Minimum Cuts to Divide a Circle
 */
var numberOfCuts = function(n) {
    if (n == 1) return 0;
        return n % 2 > 0 ? n : n / 2;
};