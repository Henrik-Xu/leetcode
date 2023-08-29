/**
 * Count the Number of Vowel Strings in Range
 */
var vowelStrings = function(words, left, right) {
    let set=new Set(['a','e','i','o','u']);
    let count=0;
    for (let i = left; i <= right; i++) {
        let word = words[i];
        if(set.has(word[0]) && set.has(word[word.length-1])){
            count++;
        }
    }
    return count;
};
let words=["are","amy","u"],left=0,right=2;
let res=vowelStrings(words,left,right);
console.log(res);