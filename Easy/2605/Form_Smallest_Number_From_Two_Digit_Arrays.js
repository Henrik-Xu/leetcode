/**
 * Form Smallest Number From Two Digit Arrays
 */
var minNumber = function(nums1, nums2) {
    let set=new Set(nums1);
    let min=10,minNum2=10;
    for (const num of nums2) {
        minNum2=Math.min(minNum2,num);
        if(set.has(num)){
            min=Math.min(min,num);
        }
    } 
    if(min!=10)return min;
    let minNum1=10;
    for (const num of nums1) {
        minNum1=Math.min(minNum1,num);
    }
    return minNum1>minNum2?minNum2*10+minNum1:minNum1*10+minNum2;
};