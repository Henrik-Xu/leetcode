/**
 * Check if All A's Appears Before All B's
 */
var checkString = function(s) {
    let b=false;
    for (let i = 0; i < s.length; i++) {
        if(b && s[i]=='a'){
            return false;
        }
        if(!b && s[i]==='b'){
            b=true;
        }
    }
    return true;
};
let s = "aaabbb";
let res=checkString(s);
console.log(res);