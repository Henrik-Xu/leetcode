/**
 * Check If String Is a Prefix of Array
 */
var isPrefixString = function(s, words) {
    let i = 0;
    
    for (const word of words) {
        if (!s.startsWith(word, i)) return false;
        i += word.length;
        if (i === s.length) return true;
    }
    
    return false;
};