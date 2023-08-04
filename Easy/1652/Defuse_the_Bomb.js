/**
 * Defuse the Bomb
 */
var decrypt = function(code, k) {
    let res=new Array(code.length).fill(0);
    if(k===0)return res;
    let sum=0;
    let start=1,end=k;
    if(k<0){
        k=-k;
        start=code.length-k;
        end=code.length-1;
    }
    for (let i = start; i <=end; i++)sum+=code[i];
    for (let i = 0; i < code.length; i++) {
        res[i]=sum;
        sum-=code[(start++)%code.length];
        sum+=code[(++end)%code.length];
    }        
    return res;  
};
let code = [2,4,9,3], k = -2;
let res=decrypt(code,k);
console.log(res);