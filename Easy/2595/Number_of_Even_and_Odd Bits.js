/**
 * Number of Even and Odd Bits
 */
var evenOddBit = function(n) {
    let even = 0, odd = 0;
    for(let i = 0; i < 32; ++i){
        if(n & (1 << i)){
            if(i%2) odd++;
            else even++;
        }
    }
    return [even, odd];
};
let n = 17;
let res=evenOddBit(n);
console.log(res);