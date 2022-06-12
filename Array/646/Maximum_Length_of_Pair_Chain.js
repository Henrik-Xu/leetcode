/**
 * Maximum Length of Pair Chain
 */

let findLongestChain = function(pairs) {
    pairs.sort((a,b)=>a[1]-b[1]);
    let cur = Number.MIN_SAFE_INTEGER,ans = 0;
    for (const pair of pairs) {
        if(cur<pair[0]){
            cur = pair[1];
            ans++;
        }
    }
    return ans;
};