/**
 * Reshape the Matrix
 */
let matrixReshape = function(matrix, r, c) {
    if(matrix.length == 0)return matrix;
    let R = matrix.length, C = matrix[0].length;
    if(R*C != r*c || R == r) return matrix;
    let newMatrix = new Array(r).fill(0).map(()=>new Array(c).fill(0));
    for (let i = 0; i < R * C; i++) {
        newMatrix[Math.floor(i/c)][i%c] = matrix[Math.floor(i/C)][i%C];
    }
    return newMatrix;
};
let matrix = [[1,2],[3,4]], r = 1, c = 4;
let res = matrixReshape(matrix,r,c);
console.log(res);