/**
 * Maximum Enemy Forts That Can Be Captured
 */
var captureForts = function(forts) {
    let res=0;
    for (let i = 0,j=0; i < forts.length; i++) {
        if(forts[i]!=0){
            if(forts[j]==-forts[i]){
                res=Math.max(res,i-j-1);
            }
            j=i;
        }
    }
    return res;
};
let forts = [1,0,0,-1,0,0,0,0,1];
let res=captureForts(forts);
console.log(res);