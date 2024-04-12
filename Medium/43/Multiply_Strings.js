/**
 * Multiply Strings
 */
var multiply = function(num1, num2) {
    let m=num1.length,n=num2.length;
    let pos=new Array(m+n).fill(0);
    for (let i = m-1; i >=0; i--) {
        for (let j = n-1; j >=0; j--) {
            let mul=parseInt(num1[i]) * parseInt(num2[j]);
            let p1=i+j,p2=i+j+1;
            let sum=mul+pos[p2];
            pos[p2]=sum%10;
            pos[p1]+=parseInt(sum/10);
        }
    }
    let sb='';
    for (let i = 0; i < pos.length; i++) {
        if(sb.length==0 && pos[i]==0)continue;
        sb+=pos[i];
    }
    return sb.length==0?'0':sb;
};
let num1 = "0", num2 = "0";
let res=multiply(num1,num2);
console.log(res);