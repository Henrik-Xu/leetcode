/**
 * Range Addition II
 */
let maxCount = function(m, n, ops) {
    if(ops == null || ops.length == 0){
        return m*n;
    }
    let row = Number.MAX_SAFE_INTEGER,col = Number.MAX_SAFE_INTEGER;
    for (const [x,y] of ops) {
        row = Math.min(row,x);
        col = Math.min(col,y);
    }
    return row * col;
};
let m = 3, n = 3, ops = [[2,2],[3,3]];
let res=maxCount(m,n,ops);
console.log(res);