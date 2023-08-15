/**
 * Count Vowel Substrings of a String
 */
var countVowelSubstrings = function(word) {
    let count=0;
    for(let i=0;i<word.length;i++){
        let vowels=new Set();
        for(let j=i;j<word.length;j++){
            if(isVowel(word[j])){
                vowels.add(word[j]);
                if(vowels.size==5)
                    count++;
            }
            else
                break;
        }

    }
    return count;
};
let isVowel=function(c) {
    return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
};