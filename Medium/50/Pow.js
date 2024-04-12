/**
 * Pow(x, n)
 */
var myPow = function(x, n) {
    if(n < 0){
        n = -n;
        x = 1 / x;
    }
    let pow=1;
    while (n!=0) {
        if((n&1)!=0){
            pow*=x;
        }
        x*=x;
        n>>>=1;
    }
    return pow;
};
let x=7,n=11;
let res=myPow(x,n);
console.log(res);