/**
 * Ugly Number
 */
let isUgly = function(n) {
    if(n==0){
        return false;
    }
    for (let i = 2; i <=6; i++) {
        while (n%i==0) {
            n=n/i;
        }
    }
    return n==1;
};