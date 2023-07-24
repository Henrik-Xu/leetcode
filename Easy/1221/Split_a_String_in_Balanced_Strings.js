/**
 * Split a String in Balanced Strings
 */
let balancedStringSplit = function(s) {
    let res=0,count=0;
    for (let i = 0; i < s.length; i++) {
        count+=s[i]=='L'?1:-1;
        if(count==0){
            res++;
        }
    }
    return res;
};
let s = "RLRRRLLRLL";
let res=balancedStringSplit(s);
console.log(res);