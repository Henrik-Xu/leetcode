/**
 * Find Greatest Common Divisor of Array
 */
var findGCD = function(nums) {
    let max=0,min=1001;
    for (const n of nums) {
        max=Math.max(max,n);
        min=Math.min(min,n);
    }
    return gcd(max,min);
};
let gcd=function(a,b){
    if(b===0) return a;
    return gcd(b,a%b);
}