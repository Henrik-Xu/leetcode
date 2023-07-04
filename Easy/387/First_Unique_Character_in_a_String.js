/**
 * First Unique Character in a String
 */
let firstUniqChar = function(s) {
    let arr=new Array(26).fill(0);
    for (const c of s) {
        arr[c.charCodeAt(0)-97]++;
    }
    for (let i = 0; i < s.length; i++) {
        if(arr[s[i].charCodeAt(0)-97]==1){
            return i;
        }
    }
    return -1;
};
let s="leetcode";
let res=firstUniqChar(s);
console.log(res);