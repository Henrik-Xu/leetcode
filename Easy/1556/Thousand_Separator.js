/**
 * Thousand Separator
 */
var thousandSeparator = function(n) {
    let s=n.toString(),res='';
    for (let i = 0; i < s.length; i++) {
        if(i>0 && (s.length-i)%3==0){
            res+='.';
        }
        res+=s[i];
    }
    return res;
};
let n = 1234;
let res=thousandSeparator(n);
console.log(res);