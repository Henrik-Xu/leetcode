/**
 * Valid Anagram
 * Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */
let isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
    }
    let arr=new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i)-'a'.charCodeAt(0)]++;
        arr[t.charCodeAt(i)-'a'.charCodeAt(0)]--;
    }
    for (const a of arr) {
        if(a!=0){
            return false;
        }
    }
    return true;
};
let  s = "a", t = "ab";
let res=isAnagram(s,t);
console.log(res);