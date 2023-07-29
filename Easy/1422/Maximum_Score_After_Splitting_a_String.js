/**
 * Maximum Score After Splitting a String
 */
var maxScore = function(s) {
    let zeros=0,ones=0,max=Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < s.length; i++) {
        if(s[i]=='0'){
            zeros++;
        }else{
            ones++;
        }
        if(i!=s.length-1){
            max=Math.max(max,zeros-ones);
        }   
    }
    return max+ones;
};
let s = "011101";
let res=maxScore(s);
console.log(res);