/**
 * Toeplitz Matrix
 */
let isToeplitzMatrix = function(matrix) {
    let M=matrix.length,N=matrix[0].length;
    for (let m = 0; m < M-1; m++) {
        for (let n = 0; n < N-1; n++) {
            if(matrix[m][n]!=matrix[m+1][n+1])return false;
        }
    }
    return true;
};
let matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]];
let res =isToeplitzMatrix(matrix);
console.log(res);