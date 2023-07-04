/**
 * Find the Difference
 */
let findTheDifference = function(s, t) {
    let res=t.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        res=res+t.charCodeAt(i+1)-s.charCodeAt(i);
    }
    return String.fromCharCode(res);
};
let s = "abcd", t = "abcde";
let res=findTheDifference(s,t);
console.log(res);