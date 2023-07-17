/**
 * Projection Area of 3D Shapes
 */
let projectionArea = function(grid) {
    let res = 0, n = grid.length;
    for (let i = 0; i < n; ++i) {
        let x = 0, y = 0;
        for (let j = 0; j < n; ++j) {
            x = Math.max(x, grid[i][j]);
            y = Math.max(y, grid[j][i]);
            if (grid[i][j] > 0) ++res;
        }
        res += x + y;
    }
    return res;
};