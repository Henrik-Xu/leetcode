/**
 * Find the Distinct Difference Array
 */
var distinctDifferenceArray = function(nums) {
    let prefix=new Map(),suffix=new Map();
    for (const n of nums) {
        suffix.set(n,suffix.get(n)+1||1);
    }
    let res=[];
    for (const n of nums) {
        prefix.set(n,prefix.get(n)+1||1);
        suffix.set(n,suffix.get(n)-1);
        if(suffix.get(n)==0)suffix.delete(n);
        res.push(prefix.size-suffix.size);
    }
    return res;
};
let nums =
[1,2,3,4,5];
let res=distinctDifferenceArray(nums);
console.log(res);