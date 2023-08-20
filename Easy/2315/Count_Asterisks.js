/**
 * Count Asterisks
 */
var countAsterisks = function (s) {
    let res = 0, bars = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] == '*' && bars % 2 == 0)
            res++;
        if (s[i] == '|')
            bars++;
    }
    return res;
};