/**
 * Maximum Product Difference Between Two Pairs
 */
var maxProductDifference = function(nums) {
    let max1=-1,max2=-1,min1=-1,min2=-2;
    for (const n of nums) {
        if(max1<n){
            max2=max1;
            max1=n;
        }else if(max2<n){
            max2=n;
        }
        if(min1==-1 || min1>n){
            min2=min1;
            min1=n;
        }else if(min2==-1 || min2>n){
            min2=n;
        }
    }
    return max1*max2-min1*min2;
};
let nums = [5,6,2,7,4];
let res=maxProductDifference(nums);
console.log(res);