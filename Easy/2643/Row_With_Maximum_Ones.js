/**
 * Row With Maximum Ones
 */
var rowAndMaximumOnes = function(mat) {
    let index=0,max=0;
    for (let i = 0; i < mat.length; i++) {
       let ones=0;
       for (let j = 0; j < mat[0].length; j++) {
           if(mat[i][j]==1)
           ones++;
       }
       if(ones>max){
           max=ones;
           index=i;
       }
    }
    return [index,max];
};