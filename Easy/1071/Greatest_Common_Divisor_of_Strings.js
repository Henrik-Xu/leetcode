/**
 * Greatest Common Divisor of Strings
 */
var gcdOfStrings = function(str1, str2) {
    if((str1+str2)!=str2+str1)return '';
    let val=gcd(str1.length,str2.length);
    return str2.substring(0,val);
}
let gcd=function(p,q){
    if(q==0)return p;
    else return gcd(q,p%q);
}
let str1 = "ABCABC", str2 = "ABC";
let res=gcdOfStrings(str1,str2);
console.log(res);