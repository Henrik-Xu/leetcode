/**
 * Partition Array Into Three Parts With Equal Sum
 */
let canThreePartsEqualSum = function(arr) {
    let sum=arr.reduce((accurator,currentValue)=>accurator+currentValue,0);
    let part=0,cnt=0;
    if(sum%3!=0){
        return false;
    }
    let average=sum/3;
    for (const a of arr) {
        part+=a;
        if(part===average){
            cnt++;
            part=0;
        }
    }
    return cnt>=3;
};