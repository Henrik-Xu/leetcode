/**
 * Add Binary
 */
let addBinary = function(a, b) {
    let sb='';
    let i=a.length-1,j=b.length-1,carry=0;
    while (i>=0 || j>=0) {
        let sum=carry;
        if(i>=0)sum+=parseInt(a.charAt(i--));
        if(j>=0)sum+=parseInt(b.charAt(j--));
        sb+=(sum%2);
        carry=Math.floor(sum/2);
    }
    if(carry!=0)sb+=carry;
    return [...sb].reverse().join('');
};
let a = '11', b = '1';
let res =addBinary(a,b);
console.log(res);