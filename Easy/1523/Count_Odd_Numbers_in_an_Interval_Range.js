/**
 *  Count Odd Numbers in an Interval Range
 */
var countOdds = function(low, high) {
    let res=0;
    for (let i = low; i <= high; i++) {
        res+=i%2==0?0:1;
    }
    return res;
};