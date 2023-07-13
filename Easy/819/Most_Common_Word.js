/**
 * Most Common Word
 */
let mostCommonWord = function(paragraph, banned) {
    const words = paragraph.toLowerCase().split(/[ !?',;.]/);
    const map = new Map();
    const set = new Set(banned);
    words.forEach(word => map.set(word, map.has(word) ? map.get(word) + 1 : 1));
    set.forEach(banned => {
        if(map.has(banned)) map.delete(banned);
    });
    
    let res = '', max = Number.MIN_SAFE_INTEGER;
    for(let [word, count] of map.entries()) {
        if(word) {
            res = count > max ? word : res;
            max = count > max ? count : max;
        }
    }
    return res;
};