/**
 * Shift 2D Grid
 */
let shiftGrid = function(grid, k) {
   let m=grid.length,n=grid[0].length;
   let res=new Array(m).fill(0).map(()=>new Array(n).fill(0));
   for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
        let j=(c+k)%n;
        let i=(r+Math.floor((c+k)/n))%m;
        res[i][j]=grid[r][c];
    }
   } 
   return res;
};
