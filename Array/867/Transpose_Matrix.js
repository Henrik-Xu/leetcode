/**
 * Transpose Matrix
 */
let transpose = function(matrix) {
    let M=matrix.length,N=matrix[0].length;
    let res=new Array(N).fill(-1).map(()=>new Array(M).fill(-1));
    for (let j = 0; j < N; j++) {
        for (let i = 0; i < M; i++) {
            res[j][i]=matrix[i][j];
        }
    }
    return res;
};
let matrix = [[1,2,3],[4,5,6]];
let res=transpose(matrix);
console.log(res);