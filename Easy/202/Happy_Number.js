/**
 * Happy Number
 */
let isHappy = function(n) {
    let seen=new Set();
    while(n!=1 && !seen.has(n)){
        seen.add(n);
        n=sum(n);
    }
    return n==1;
}
let sum=function(n){
    let res=0;
    while (n!=0) {
        let remainer=n%10;
        res+=remainer*remainer;
        n=parseInt(n/10);
    }
    return res;
}
let n = 2;
let res=isHappy(n);
console.log(res);