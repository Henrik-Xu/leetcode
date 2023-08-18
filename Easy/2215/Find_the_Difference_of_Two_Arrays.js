/**
 * Find the Difference of Two Arrays
 */
var findDifference = function(nums1, nums2) {
    let set1=new Set(nums1);
    let set2=new Set(nums2);
    let arr1=[];
    let arr2=[];
    for(let i of set1){
        if(!set2.has(i)){
            arr1.push(i);
        }
    }
    for(let i of set2){
        if(!set1.has(i)){
            arr2.push(i);
        }
    }
    return [arr1,arr2];
};