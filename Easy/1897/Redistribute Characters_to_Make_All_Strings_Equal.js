/**
 * Redistribute Characters to Make All Strings Equal
 */
var makeEqual = function(words) {
    let freq = new Array(26).fill(0);
    for(let str of words){
        for(let i=0; i<str.length; i++){
            let ch = str[i];
            freq[ch.charCodeAt(0)-'a'.charCodeAt(0)]++;
        }
        
    }
    for(let f of freq){
        if(f > 0 && f % words.length != 0){
            return false;
        }
    }
    return true;
}
let words=["caaaaa","aaaaaaaaa","a","bbb","bbbbbbbbb","bbb","cc","cccccccccccc","ccccccc","ccccccc","cc","cccc","c","cccccccc","c"];
let res=makeEqual(words);
console.log(res);