/**
 * Convert Integer to the Sum of Two No-Zero Integers
 */
var getNoZeroIntegers = function(n) {
    let i=1,j=n-1;
    while (i<=j) {
        if(nonZero(i) && nonZero(j)){
            return [i,j];
        }
        i++;
        j--;
    }
    return [-1,-1];
};
let nonZero=function(n){
    while (n>0) {
        if(n%10==0)return false;
        n=Math.floor(n/10);
    }
    return true;
}
let n=1010;
let res=getNoZeroIntegers(n);
console.log(res);