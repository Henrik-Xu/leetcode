/**
 * Determine Whether Matrix Can Be Obtained By Rotation
 */
var findRotation = function(mat, target) {
    let c=new Array(4).fill(true);
    let n=mat.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(mat[i][j]!=target[i][j]){
                c[0]=false;
            }
            if(mat[i][j]!=target[n-j-1][i]){
                c[1]=false;
            }
            if(mat[i][j]!=target[n-i-1][n-j-1]){
                c[2]=false;
            }
            if(mat[i][j]!=target[j][n-i-1]){
                c[3]=false;
            }
        }
    }
    return c.includes(true);
};