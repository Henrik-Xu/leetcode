/**
 * Minimum Changes To Make Alternating Binary String
 */
var minOperations = function(s) {
    let res=0;
    for (let i = 0; i < s.length; i++) {
        if(s[i]!=(i%2==0?'0':'1'))
            res++;
    }
    let min=Math.min(res,s.length-res);   
    return min;
};
let s = "1111";
let res=minOperations(s);
console.log(res);