/**
 * Kids With the Greatest Number of Candies
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=Number.MIN_SAFE_INTEGER;
    for (const c of candies) {
        max=Math.max(c,max);
    }
    let res=[];
    for (const c of candies) {
        if(c+extraCandies>=max){
            res.push(true);
        }else{
            res.push(false);
        }
    }
    return res;
};