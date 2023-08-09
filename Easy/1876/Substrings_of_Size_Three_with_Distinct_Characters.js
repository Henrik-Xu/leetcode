/**
 * Substrings of Size Three with Distinct Characters
 */
var countGoodSubstrings = function(s) {
    if(s.length<3)return 0;
    let a=s[0],b=s[1],c=s[2];
    let res=0;
    for(let i=3;i<=s.length-1;i++)
    {
        if(a!=b && b!=c && c!=a)res++;
        a=b;
        b=c;
        c=s[i];
    }
    if(a!=b && b!=c && c!=a)res++;
    return res;
};
let s = "xyzzaz";
let res=countGoodSubstrings(s);
console.log(res);