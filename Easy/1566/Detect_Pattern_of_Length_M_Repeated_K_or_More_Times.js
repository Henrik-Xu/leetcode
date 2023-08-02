/**
 * Detect Pattern of Length M Repeated K or More Times
 */
var containsPattern = function(arr, m, k) {
    let count=0;
    for (let i = 0; i+m < arr.length; i++) {
        if(arr[i]!=arr[i+m]){
            count=0;
        }
        count+=(arr[i]==arr[i+m]);
        if(count==(k-1)*m){
            return true;
        }
    }
    return false; 
};
let arr=[1,2,1,2,1,2],m=2,k=3;
let res=containsPattern(arr,m,k);
console.log(res);