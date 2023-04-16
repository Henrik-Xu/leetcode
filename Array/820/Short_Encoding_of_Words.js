/**
 * Short Encoding of Words 
 */
let minimumLengthEncoding = function(words) {
    let set=new Set(words);
    for (const word of words) {
        for (let i = 1; i < word.length; i++) {
            set.delete(word.substring(i));
        }
    }
    let res=0;
    for (const s of set) {
        res+=s.length+1;
    }
    return res;
};