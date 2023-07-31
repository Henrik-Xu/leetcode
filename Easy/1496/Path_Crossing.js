/**
 * Path Crossing
 */
var isPathCrossing = function(path) {
    let seen=new Set();
    seen.add('0-0');
    for (let i = 0,x=0,y=0; i < path.length; i++) {
        let c=path[i];
        if (c == 'N') {
            y += 1;
        }else if (c == 'S') {
            y -= 1;
        }else if (c == 'E') {
            x -= 1;
        }else {
            x += 1;
        }
        if(seen.has(x+'-'+y)){
            return true;
        }
        seen.add(x+'-'+y);
    }
    return false;
};
let path = "NNSWWEWSSESSWENNW";
let res=isPathCrossing(path);
console.log(res);