/**
 * Duplicate Zeros
 */
let duplicateZeros = function(arr) {
    let n=arr.length,count=0;
    for (const a of arr) {
        if(a==0)count++;
    }
    let len=n+count;
    for (let i = n-1,j=len-1; i < j; i--,j--) {
        if(arr[i]!=0){
            if(j<arr.length){
                arr[j]=arr[i];
            }
        }else{
            if(j<arr.length){
                arr[j]=arr[i];
            }
            j--;
            if(j<arr.length){
                arr[j]=arr[i];
            }
        }
    }
};
let arr = [1,0,2,3,0,4,5,0];
let res=duplicateZeros(arr);
console.log(res);