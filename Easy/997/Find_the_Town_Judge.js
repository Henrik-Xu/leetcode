/**
 * Find the Town Judge
 */
let findJudge = function(n, trust) {
    let count = new Array(n+1).fill(0);
    for (const [a,b] of trust) {
        count[a]--;
        count[b]++;
    }
    for (let i = 1; i <= n; ++i) {
        if (count[i] == n - 1) return i;
    }
    return -1;
}
let n = 3, trust = [[1,3],[2,3]];
let res=findJudge(n,trust);
console.log(res);