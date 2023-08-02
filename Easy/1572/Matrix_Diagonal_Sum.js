/**
 * Matrix Diagonal Sum
 */
var diagonalSum = function(mat) {
    let m=mat.length,n=mat[0].length;
    let sum=0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if(r==c || r+c==n-1){
                sum+=mat[r][c];
            }
        }
    }
    return sum;
};
let mat = [[1,2,3],
[4,5,6],
[7,8,9]];
let res=diagonalSum(mat);
console.log(res);