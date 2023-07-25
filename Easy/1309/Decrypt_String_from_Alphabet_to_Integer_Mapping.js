/**
 * Decrypt String from Alphabet to Integer Mapping
 */
let freqAlphabets = function(s) {
    let map = new Map();
    let k = 1;
    for (let ch = 'a'.charCodeAt(); ch <= 'z'.charCodeAt(); ch++) {
        if (ch < 'j'.charCodeAt()) {
            map[k++] = String.fromCharCode(ch);
        } else {
            map[(k++)+"#"] = String.fromCharCode(ch);
        }
    }

    let sb = '';
    let i = s.length - 1;
    while (i >= 0) {
        if (s.charAt(i) === '#') {
            sb=map[s.substring(i - 2, i+1)]+sb;
            i -= 3;
        } else {
            sb=map[s.substring(i, i + 1)]+sb;
            i--;
        }
    }

    return sb; 
};