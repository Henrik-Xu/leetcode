/**
 * Detect Capital
 */
let detectCapitalUse = function(word) {
    if(word.length < 2) return true;
    if(word.charAt(0).toUpperCase() ==word.charAt(0) && word.charAt(1).toUpperCase()==word.charAt(1)){
        for(let i = 2; i < word.length; i++){
            if(word.charAt(i).toUpperCase()!=word.charAt(i)) return false;
        }
    }
    else{
        for(let i = 1; i < word.length; i++){
            if(word.charAt(i).toUpperCase()==word.charAt(i)) return false;
        }
    }
    return true;
};
