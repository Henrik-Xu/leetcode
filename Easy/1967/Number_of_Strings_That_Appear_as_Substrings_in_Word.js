/**
 * Number of Strings That Appear as Substrings in Word
 */
var numOfStrings = function(patterns, word) {
    return [...patterns].filter(x=>word.includes(x)).length;
};