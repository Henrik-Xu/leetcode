/**
 * Number of Equivalent Domino Pairs
 */
let numEquivDominoPairs = function(dominoes) {
    let map=new Map();
    for (const [a,b] of dominoes) {
        let sum=Math.min(a,b)*10+Math.max(a,b);
        if(map.has(sum)){
            map.set(sum,map.get(sum)+1);
        }else{
            map.set(sum,1);
        }
    }
    let res=0;
    for (const count of map.values()) {
        res+=count*(count-1)/2;
    }
    return res;
};