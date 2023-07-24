/**
 * Cells with Odd Values in a Matrix
 */
let oddCells = function(m, n, indices) {
    let oddRows=new Array(m).fill(0),oddCols=new Array(n).fill(0);
    let cntRows=0,cntCol=0;
    for (const [r,c] of indices) {
        oddRows[r]^=1;
        oddCols[c]^=1;

        cntRows+=oddRows[r]?1:-1;
        cntCol+=oddCols[c]?1:-1;
    }
    return (n-cntCol)*cntRows+(m-cntRows)*cntCol;
};
let m = 2, n = 3, indices = [[0,1],[1,1]];
let res=oddCells(m,n,indices);
console.log(res);