/**
 * Two Out of Three
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
    let set1 = new Set(nums1), set2 = new Set();
    let res = new Set();
    for (const n of nums2) {
        set2.add(n);
        if(set1.has(n)){
            res.add(n);
        }
    }
    for (const n of nums3) {
        if (set1.has(n) || set2.has(n)) {
            res.add(n);
        }
    }
    return [...res];
};
let nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3];
let res=twoOutOfThree(nums1,nums2,nums3);
console.log(res);