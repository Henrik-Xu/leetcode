/**
 * Check If a Word Occurs As a Prefix of Any Word in a Sentence
 */
var isPrefixOfWord = function(sentence, searchWord) {
    let sentences=sentence.split(' ');
    for (let i = 0; i < sentences.length; i++) {
        if(sentences[i].startsWith(searchWord)){
            return i+1;
        }
    }
    return -1;
};