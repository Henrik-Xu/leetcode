/**
 * Diagonal Traverse
 * Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
 */
let findDiagonalOrder = function(matrix) {
    if(matrix==null || matrix.length==0){
        return [];
    }
    let res = [];
    let R = matrix.length, C = matrix[0].length;
    for (let i = 0; i <R+C-1; i++) {
       let r = i < C?0:i-C+1;
       let c = i<C?i:C-1;
       let temp = [];
       while (r<R && c>=0) {
        temp.push(matrix[r][c]);
           r++;
           c--;
       }
       if(i%2==0){
           temp.reverse();
       }
       res.push(...temp);
    }
    return res;
};
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let res = findDiagonalOrder(matrix);
console.log(res);