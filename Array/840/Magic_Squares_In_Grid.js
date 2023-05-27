/**
 * Magic Squares In Grid
 */
let numMagicSquaresInside = function(grid) {
    let R=grid.length,C=grid[0].length;
    let res=0;
    for (let i = 0; i < R-2; i++) {
        for (let j = 0; j < C-2; j++) {
            if(isMagic(grid,i,j)){
                res++;
            }
        }
    }
    return res;
};
let isMagic=function(grid,r,c){
    let seen=new Set();
    for (let i = r; i < r+3; i++) {
        for (let j = c; j < c+3; j++) {
            if(seen.has(grid[i][j])||grid[i][j]<1||grid[i][j]>9){
                return false;
            }
            seen.add(grid[i][j]);
        }
    }
    let sum1=grid[r][c]+grid[r+1][c+1]+grid[r+2][c+2];
    let sum2=grid[r][c+2]+grid[r+1][c+1]+grid[r+2][c];
    if(sum1!=sum2){
        return false;
    }
    for (let i = 0; i < 3; i++) {
        if(grid[r+i][c]+grid[r+i][c+1]+grid[r+i][c+2]!=sum1){
            return false;
        }
        if(grid[r][c+i]+grid[r+1][c+i]+grid[r+2][c+i]!=sum1){
            return false;
        }
    }
    return true;
}
let grid = [[10,3,5],[1,6,11],[7,9,2]];
let res=numMagicSquaresInside(grid);
console.log(res);