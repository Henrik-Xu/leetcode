/**
 *  Largest Substring Between Two Equal Characters
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let index=new Array(26).fill(0);
    let res=-1,a='a'.charCodeAt(0);
    for(let i=0;i<s.length;i++){
        if(index[s[i].charCodeAt(0)-a]==0){
            index[s[i].charCodeAt(0)-a]=i+1;
        }
        res=Math.max(res,i-index[s[i].charCodeAt(0)-a]);
    }
    return res;
};
let s = "abca";
let res=maxLengthBetweenEqualCharacters(s);
console.log(res);