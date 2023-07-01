/**
 * Number of 1 Bits
 */
let hammingWeight = function(n) {
    let str=n.toString(2);
    let ones=0;
    for (const s of str) {
        if(s=='1'){
            ones++;
        }
    }
    return ones;
};