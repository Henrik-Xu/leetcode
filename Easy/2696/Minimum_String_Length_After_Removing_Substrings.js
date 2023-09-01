/**
 * Minimum String Length After Removing Substrings
 */
var minLength = function(s) {
    let stack=[],n=s.length;
    let count=0;
    for (let i = 0; i < n; i++) {
        if((s[i]=='B' && stack[stack.length-1]=='A')||(s[i]=='D' && stack[stack.length-1]=='C')){
            stack.pop();
            count+=2;
        }else{
            stack.push(s[i]);
        }
    }
    return n-count; 
};
let s =
"ACBBD";
let res=minLength(s);
console.log(res);