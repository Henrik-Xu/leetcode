/**
 * Decode XORed Array
A[i]=res[i]^res[i+1];
A[i]^A[i]^res[i+1]==res[i]^res[i+1]^A[i]^res[i+1];
res[i+1]=res[i]^A[i];
 */
var decode = function(encoded, first) {
    let n=encoded.length,arr=new Array(n+1).fill(0);
    arr[0]=first;
    for(let i=0;i<n;i++){
        arr[i+1]=arr[i]^encoded[i];
    }
    return arr;
};