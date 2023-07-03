/**
 * Reverse String
 */
let reverseString = function(s) {
    let i=0,j=s.length-1;
    while (i<=j) {
        [s[i],s[j]]=[s[j],s[i]];
        i++;
        j--;
    }
};
let  s = "hello";
let res=reverseString(s);
console.log(res);