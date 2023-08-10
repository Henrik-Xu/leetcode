/**
 * Maximum Number of Words You Can Type
 */
var canBeTypedWords = function(text, brokenLetters) {
    let set =new Set();
    for (let i = 0; i < brokenLetters.length; i++) {
        set.add(brokenLetters[i]);
    }
    let count=0;
    for (const word of text.split(' ')) {
        count+=calculate(word,set);
    }
    return count;
};
let calculate=function(word,set){
    for (let i = 0; i < word.length; i++) {
        if(set.has(word[i])){
            return 0;
        }
    }
    return 1;
}