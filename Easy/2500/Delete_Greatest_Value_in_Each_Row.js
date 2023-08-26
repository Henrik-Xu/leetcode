/**
 * Delete Greatest Value in Each Row
 */
var deleteGreatestValue = function(grid) {
    let m=grid.length,n=grid[0].length;
    for(let i=0;i<m;i++){
      grid[i].sort((a,b)=>b-a);
    }
    let sum=0;
    for (let i = 0; i < n; i++) {
        let max=-1;
        for (let j = 0; j < m; j++) {
            max=Math.max(max,grid[j][i]);
        }
        sum+=max;
    }
    return sum;
};