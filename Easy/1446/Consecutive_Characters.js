/**
 * Consecutive Characters
 */
var maxPower = function(s) {
    let count=1,max=1;
    for (let i = 1; i < s.length; i++) {
        if(s[i]==s[i-1]){
            count++;
        }else{
            max=Math.max(max,count);
            count=1;
        }
    }
    return Math.max(max,count);
};
let s = "cc";
let res=maxPower(s);
console.log(res);