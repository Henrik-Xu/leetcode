/**
 * Find the K-Beauty of a Number
 */
var divisorSubstrings = (num, k) => {
    let numToString = num.toString();
    let count = 0;
    for (let i = 0; i <= numToString.length - k; i++) {
        let subNum = parseInt(numToString.slice(i, k + i));
        if (num % subNum === 0) count++;
    }
    return count;
};