/**
 * Hamming Distance
 */
let hammingDistance = function(x, y) {
    return (x^y).toString(2).split('').filter(x=>x=='1').length;
};