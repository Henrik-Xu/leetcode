/**
 * Check if Word Equals Summation of Two Words
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
    let first=sumWord(firstWord);
    let second=sumWord(secondWord);
    let target=sumWord(targetWord);
    return (first+second===target);
};
let sumWord=function(words){
    let sb='';
    for (let i = 0; i < words.length; i++) {
        sb+=(words[i].charCodeAt()-'a'.charCodeAt());
    }
    return parseInt(sb);
}