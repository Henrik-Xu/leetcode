/**
 * Power of Four
 */
let isPowerOfFour = function(n) {
    return n > 0 && (n&(n-1)) == 0 && (n & 0x55555555) != 0;
    //0x55555555 is to get rid of those power of 2 but not power of 4
    //so that the single 1 bit always appears at the odd position 
};
