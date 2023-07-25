/**
 * Rank Transform of an Array
 */
var arrayRankTransform = function (arr) {
    let sorted = [...arr];
    sorted.sort((a, b) => a - b);
    let map = new Map();
    let rank = 1;
    for (const n of sorted) {
        if (!map.has(n)) {
            map.set(n, rank++);
        }
    }
    let res = [];
    for (const a of arr) {
        res.push(map.get(a));
    }
    return res;
};