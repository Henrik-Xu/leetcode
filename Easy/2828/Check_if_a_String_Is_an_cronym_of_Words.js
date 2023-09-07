/**
 * Check if a String Is an Acronym of Words in Another String
 */

var isAcronym = function(words, s) {
    if(words.length!=s.length)return false;
    for (let i = 0; i < words.length; i++) {
        let word=words[i];
        if(word[0]!=s[i]){
            return false;
        }
    }
    return true;
};