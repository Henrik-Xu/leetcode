/**
 * Delete Columns to Make Sorted
 */
let minDeletionSize = function(strs) {
    let delete_count=0;
    let row = strs.length,col=strs[0].length;
    for (let c = 0; c < col; c++) {
        for (let r = 1; r < row; r++) {
           if(strs[r][c]<strs[r-1][c]){
               delete_count++;
               break;
           }
        }       
    }
    return delete_count;
 };