/**
 * Maximum Number of Words Found in Sentences
 */
var mostWordsFound = function(sentences) {
    return Math.max(...sentences.map(item=>item.split(" ").length))
};