/**
 * Keyboard Row
 */
let findWords = function(words) {
    function canBeTyped(word,row){
        for (const char of word) {
            if(!row.has(char.toLowerCase()))return false;
        }
        return true;
    }
    let row1 = new Set('qwertyuiop');
    let row2 = new Set('asdfghjkl');
    let row3 = new Set('zxcvbnm');

    let res = [];
    for (const word of words) {
        if(canBeTyped(word,row1) || canBeTyped(word,row2) || canBeTyped(word,row3)){
            res.push(word);
        }
    }
    return res;
};