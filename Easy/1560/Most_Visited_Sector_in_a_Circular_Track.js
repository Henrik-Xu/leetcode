/**
 * Most Visited Sector in a Circular Track
 */
var mostVisited = function(n, rounds) {
    let res=[];
    for (let i = rounds[0]; i <=rounds[rounds.length-1]; i++) {
        res.push(i);
    }
    if(res.length>0)return res;
    for (let i = 1; i <= rounds[rounds.length-1]; i++) {
        res.push(i);
    }
    for (let i = rounds[0]; i<=n; i++) {
        res.push(i);
    }
    return res;
};
let n = 3, rounds = [3,2,1,2,1,3,2,1,2,1,3,2,3,1];
let res=mostVisited(n,rounds);
console.log(res);