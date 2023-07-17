/**
 * Surface Area of 3D Shapes
 */
let surfaceArea = function(grid) {
    let res = 0, n = grid.length;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] > 0) res += grid[i][j] * 4 + 2;
            if (i > 0) res -= Math.min(grid[i][j], grid[i - 1][j]) * 2;
            if (j > 0) res -= Math.min(grid[i][j], grid[i][j - 1]) * 2;
        }
    }
    return res;
};