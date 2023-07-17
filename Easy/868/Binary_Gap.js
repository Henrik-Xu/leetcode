/**
 * Binary Gap
 */
let binaryGap = function(n) {
    let arr=n.toString(2);
    let previous=-1,res=0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]=='1'){
            if(previous==-1){
                previous=i;
            }else{
                res=Math.max(res,i-previous);
                previous=i;
            }
        }
    }
    return res;
};