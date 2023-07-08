/**
 * Longest Uncommon Subsequence I
 */
let findLUSlength = function(a, b) {
    return a===b?-1:Math.max(a.length,b.length);
};