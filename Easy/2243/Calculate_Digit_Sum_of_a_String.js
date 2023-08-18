/**
 * Calculate Digit Sum of a String
 */
var digitSum = function(s, k) {
    if(s.length<=k)return s;
    while (s.length>k) {
        let sb='',sum=0;
        for (let i = 0; i < s.length; i++) {
            if(i>0 && i%k==0){
                sb+=sum;
                sum=0;
            }
            sum+=parseInt(s[i]);
        }
        sb+=sum;
        s=sb; 
    }
    return s;
};
let s = "11111222223", k = 3;
let res=digitSum(s,k);
console.log(res);