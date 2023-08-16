/**
 * Check if Every Row and Column Contains All Numbers
 */
var checkValid = function (matrix) {
    let m = matrix.length, n = matrix[0].length;
    for (let i = 0; i < m; i++) {
        let row = new Set();
        let col=new Set();
        for (let j = 0; j < n; j++) {
            row.add(matrix[i][j]);
            col.add(matrix[j][i]);
        }
        if (row.size != n) return false;
        if(col.size!=n)return false;
    }
    return true;
};