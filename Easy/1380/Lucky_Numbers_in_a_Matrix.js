/**
 * Lucky Numbers in a Matrix
 */
let luckyNumbers  = function(matrix) {
    let m=matrix.length,n=matrix[0].length;
    let row=[],col=[];
    for (let i = 0; i < n; i++) {
        let max=Number.MIN_SAFE_INTEGER;
        for (let j = 0; j < m; j++) {
            max=Math.max(matrix[j][i],max);
        }
        col.push(max);  
    }
    for (let i = 0; i < m; i++) {
        let min=Number.MAX_SAFE_INTEGER;
        for (let j = 0; j < n; j++) {
            min=Math.min(matrix[i][j],min);
        }
        row.push(min);  
    }
    let res=[];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(matrix[i][j]==row[i] && matrix[i][j]==col[j]){
                res.push(matrix[i][j]);
            }     
        }        
    } 
    return res;
}