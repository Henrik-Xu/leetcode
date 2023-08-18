/**
 * Count Prefixes of a Given String
 */
var countPrefixes = function(words, s) {
    let count=0;
    for (const word of words) {
        count+=isPrefixes(word,s)?1:0;
    }
    return count;
};
let isPrefixes=function(source,target){
    for (let i = 0; i < source.length; i++) {
        if(source[i]!=target[i]){
            return false;
        }
    }
    return true;
}