/**
 * Special Positions in a Binary Matrix
 */
var numSpecial = function(mat) {
    let m=mat.length,n=mat[0].length;
    let rows=new Array(m).fill(0),cols=new Array(n).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if(mat[r][c]==1){
                rows[r]++;
                cols[c]++;
            }
        }
    }
    let res=0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if(mat[r][c]==1 && rows[r]==1 && cols[c]==1){
               res++;
            }
        }
    }
    return res;
};
let mat = [[1,0,0],[0,0,1],[1,0,0]];
let res=numSpecial(mat);
console.log(res);