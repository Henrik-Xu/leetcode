/**
 * Island Perimeter
 */
let islandPerimeter = function(grid) {
    let R = grid.length, C = grid[0].length;
    let islands = 0, neighbours = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if(grid[r][c]==1){
                islands++;
                if(r<R-1 && grid[r+1][c]==1)neighbours++;
                if(c<C-1 && grid[r][c+1])neighbours++;
            }
        }
    }
    return islands*4-neighbours*2;
};