/**
 * Check if the Sentence Is Pangram
 */
var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false;
    let set = new Set();
    for(let i = 0; i < sentence.length; i++) {
        set.add(sentence[i]);
    }
    return set.size === 26;
};