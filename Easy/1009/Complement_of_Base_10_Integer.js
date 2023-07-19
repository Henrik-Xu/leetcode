/**
 * Complement of Base 10 Integer
 */
let bitwiseComplement = function(n) {
    let bits=n.toString(2);
    let sum=0;
    for (let i = 0; i < bits.length; i++) {
        sum+=1<<i;
    }
    return sum-n;
};
let n=5;
let res=bitwiseComplement(n);
console.log(res);