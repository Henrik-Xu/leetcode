/**
 * Find First Palindromic String in the Array
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        if(isPalindromic(word)){
            return word;
        }
    }
    return '';
};
let isPalindromic=function(word){
    let i=0,j=word.length-1;
    while(i<j){
        if(word[i]!==word[j]) return false;
        i++;
        j--;
    }
    return true;
}