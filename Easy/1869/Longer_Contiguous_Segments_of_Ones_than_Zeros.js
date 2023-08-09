/**
 * Longer Contiguous Segments of Ones than Zeros
 */
var checkZeroOnes = function(s) {
    let ones=0,zeros=0;
    let tempOne=0,tempZero=0;
    for (let i = 0; i < s.length; i++) {   
        if (s[i] === '1') {
            tempOne++;
            tempZero=0;
        }else if (s[i] === '0') {
            tempZero++;
            tempOne=0;
        }
        ones=Math.max(ones,tempOne);
        zeros=Math.max(zeros,tempZero);
    }
    return ones>zeros;
};
let s="0111010011";
let res=checkZeroOnes(s);
console.log(res);