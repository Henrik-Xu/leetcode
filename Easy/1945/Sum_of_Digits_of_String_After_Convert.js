/**
 * Sum of Digits of String After Convert
 */
var getLucky = function(s, k) {
    let sb='';
    for (let i = 0; i < s.length; i++) {
        sb+=s.charCodeAt(i)-96;
    }
    let sum=0;
    while (k>0) {
        sum=0;
        for (let i = 0; i < sb.length; i++) {
            sum+=parseInt(sb[i]);
        }
        sb=sum.toString();
        k--;
    }
    return sum;
};
let s="leetcode",k=2;
let res=getLucky(s,k);
console.log(res);