/**
 * Maximum Units on a Truck
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a,b) => b[1]-a[1]);
    let res=0;
    for (const [num,unit] of boxTypes) {
        if(truckSize>=num){
            res+=num*unit;
            truckSize-=num;
        }else{
            res+=truckSize*unit;
            break;
        }
    }
    return res;
};
let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10;
let res=maximumUnits(boxTypes);
console.log(res);