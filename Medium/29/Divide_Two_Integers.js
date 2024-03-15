/**
 * Divide Two Integers
 */
var divide = function(dividend, divisor) {
    let max_int=Math.pow(2,31)-1,min_int=Math.pow(-2,31);
    if(dividend==min_int && divisor==-1){
        return max_int;
    }
    let quotient=0;
    let sign=1;
    if((dividend>0&&divisor<0) || (dividend<0 && divisor>0)){
        sign=-1;
    }
    dividend=Math.abs(dividend),divisor=Math.abs(divisor);
    while (dividend>=divisor) {
        let temp=divisor,m=1;
        while (temp<= (dividend>>1)) {
            temp=temp<<1;
            m=m<<1;
        }
        dividend-=temp;
        quotient+=m;
    }
    return sign*quotient;
};
let dividend = 2147483647, divisor = -1;
let res=divide(dividend,divisor);
console.log(res);