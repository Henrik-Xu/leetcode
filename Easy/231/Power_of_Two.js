/**
 * Power of Two
 * Follow up: Could you solve it without loops/recursion?
 */
let isPowerOfTwo = function(n) {
    return n > 0 && (n & n - 1) == 0;
};