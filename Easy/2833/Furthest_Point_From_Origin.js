/**
 * Furthest Point From Origin
 */
var furthestDistanceFromOrigin = function(moves) {
    let R=0,L=0,line=0;
    for(let i=0;i<moves.length;i++){
        if(moves[i]=='R'){
            R++;
        }else if(moves[i]=='L'){
            L++;
        }else{
            line++;
        }
    }
    let max=Math.max(R,L),min=Math.min(R,L);
    return max-min+line;
};