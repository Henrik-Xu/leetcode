/**
 * Counting Bits
 */
let countBits = function(n) {
    let res=new Array(n+1).fill(0);
    for (let i = 1; i <=n; i++) {
        if(i%2==0){
            res[i]=res[i/2];
        }else{
            res[i]=res[i-1]+1;
        }
    }
    return res;
};