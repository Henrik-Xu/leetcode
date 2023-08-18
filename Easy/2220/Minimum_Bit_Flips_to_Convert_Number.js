/**
 * Minimum Bit Flips to Convert Number
 */
var minBitFlips = function(start, goal) {
    let s=start.toString(2);
    let g=goal.toString(2);
    if(s.length<g.length){
        let diff=g.length-s.length;
        for(let i=0;i<diff;i++){
            s='0'+s;
        }
    }
    if(g.length<s.length){
        let diff=s.length-g.length;
        for(let i=0;i<diff;i++){
            g='0'+g;
        }
    }
    let count=0;
    for(let i=0;i<s.length;i++){
        if(s[i]!=g[i])
            count++;
    }
    return count;
};
let start = 99, goal = 29;
let res=minBitFlips(start,goal);
console.log(res);