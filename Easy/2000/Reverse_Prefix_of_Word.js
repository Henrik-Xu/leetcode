/**
 * Reverse Prefix of Word
 */
var reversePrefix = function(word, ch) {
    let i=0;
    for (; i < word.length; i++) {
        if(word.charAt(i) == ch)
            break;
    }
    if (i==0 || i==word.length) {
        return word;
    }
    let start=0,res=[...word];
    while (start<i) {
        [res[start],res[i]]=[word[i],word[start]];
        start++,i--; 
    }
    return res.join('');
};
let word = "abcd", ch = "z";
let res=reversePrefix(word,ch);
console.log(res);