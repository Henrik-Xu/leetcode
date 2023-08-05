/**
 * Count of Matches in Tournament
 */
var numberOfMatches = function(n) {
    let res=0;
    while (n>1) {
        if(n%2==0){
            res+=n/2;
            n=n/2;
        }else{
            res+=(n-1)/2;
            n=(n-1)/2+1;
        }
    }
    return res;
};
let n = 7;
let res=numberOfMatches(n);
console.log(res);