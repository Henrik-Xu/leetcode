/**
 * Maximum Number of Pairs in Array
 */
var numberOfPairs = function(nums) {
    let count=new Array(101).fill(0);
    for (const num of nums) {
        count[num]++;
    }
    let pairs=0,leftover=0;
    for (const num of count) {
        if(num==0)continue;
        pairs+=Math.floor(num/2);
        leftover+=num%2;
    }
    return [pairs,leftover];
};