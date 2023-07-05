/**
 * Repeated Substring Pattern
 */
let repeatedSubstringPattern = function(s) {
    let doubleStr=s+s;
    return doubleStr.substring(1, doubleStr.length - 1).includes(s);
};
let s="abab";
let res=repeatedSubstringPattern(s);
console.log(res);