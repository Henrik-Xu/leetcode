/**
 * 01 Matrix
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 */
let updateMatrix = function(matrix) {
   if(matrix.length==0)return matrix;
   let R = matrix.length, C = matrix[0].length;
   let queue = [];
   for (let r = 0; r < R; r++) {
       for (let c = 0; c < C; c++) {
           if(matrix[r][c] == 0){
               queue.push([r,c]);
           }else{
               matrix[r][c] = Number.MAX_SAFE_INTEGER;
           }
       }
   }
   let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
   while (queue.length!=0) {
       let [r,c] = queue.shift();
       for (const [x,y] of dirs) {
           let newR = r+x,newC = c+y;
           if(newR>=0 && newC>=0 && newR<R && newC < C){
               if(matrix[newR][newC]>matrix[r][c]+1){
                   matrix[newR][newC] = matrix[r][c]+1;
                   queue.push([newR,newC]);
               }
           }
       }
   }
   return matrix;
};
let matrix = [[0,0,0],[0,1,0],[1,1,1]];
let res = updateMatrix(matrix);
console.log(res);
