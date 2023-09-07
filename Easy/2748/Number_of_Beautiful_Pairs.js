/**
 * Number of Beautiful Pairs
 */
var countBeautifulPairs = function(nums) {
    let res=0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            let first=firstDigit(nums[i]);
            let last=lastDigit(nums[j]);
            let a=Math.max(first,last);;
            let b=Math.min(first,last);
            if(gcd(a,b)==1){
                res++;
            }
        }
    }
    return res;
};
let firstDigit=function(num){
   return num.toString()[0];
}
let lastDigit=function(num){
    return num.toString()[num.toString().length-1];
}
let gcd=function(a,b){
    if (b==0) {
        return a;
    }
    return gcd(b,a%b);
}
let nums =
[2,5,1,4];
let res=countBeautifulPairs(nums);
console.log(res);