/**
 * Number of Good Pairs
 */
var numIdenticalPairs = function(nums) {
    let count=new Array(101).fill(0);
    let res=0;
    for (const n of nums) {
        res+=count[n];
        count[n]++;
    }
    return res;
};