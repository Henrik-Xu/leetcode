/**
 * Shifting Letters
 */
let shiftingLetters = function(s, shifts) {
    let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let map=new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(i,arr[i]);
    }
    let ans='',shift=0;
    for (let i = s.length-1; i >=0; i--) {
        shift+=shifts[i];
        ans=map.get((shift+s[i].charCodeAt(0)-97)%26)+ans;
    }
    return ans;
};
let s = "abc", shifts = [3,5,9];
let res=shiftingLetters(s,shifts);
console.log(res);