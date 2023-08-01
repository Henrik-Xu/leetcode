/**
 * Kth Missing Positive Number
 * Could you solve this problem in less than O(n) complexity?
 */
var findKthPositive = function(arr, k) {
    let l = 0, r = arr.length, m;
    while (l < r) {
        m = Math.floor((l + r) / 2);
        if (arr[m] - 1 - m < k)
            l = m + 1;
        else
            r = m;
    }
    return l + k;
};
let arr = [2,3,4,7,11], k = 5;
let res=findKthPositive(arr,k);
console.log(res);