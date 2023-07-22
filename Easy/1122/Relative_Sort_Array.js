/**
 * Relative Sort Array
 */
let relativeSortArray = function(arr1, arr2) {
    let count=new Array(1001).fill(0);
    for (const a of arr1) {
        count[a]++;
    }
    let i=0;
    for (const n of arr2) {
        while (count[n]-->0) {
            arr1[i++]=n;
        }
    }
    for (let n = 0; n < count.length; n++) {
        while (count[n]-->0) {
            arr1[i++]=n;
        }
    }
    return arr1;
};
let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
let res=relativeSortArray(arr1,arr2);
console.log(res);