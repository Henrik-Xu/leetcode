/**
 * Search a 2D Matrix
 */
var searchMatrix = function(matrix, target) {
    let m=matrix.length,n =matrix[0].length;
    let i=0,j=m*n-1;
    while (i<=j) {
        let mid=i+Math.floor((j-i)/2);
        let row=Math.floor(mid/n);
        let col=mid%n;
        if(matrix[row][col]==target){
            return true;
        }else if(matrix[row][col]<target){
            i=mid+1;
        }else{
            j=mid-1;
        }
    }
    return false;
};
let matrix=[[1]],target=2;
let res=searchMatrix(matrix,target);
console.log(res);