/**
 * Cells in a Range on an Excel Sheet
 */
var cellsInRange = function(s) {
    let [start,end]=s.split(":");
    let colStart=start.charCodeAt(0);
    let colEnd=end.charCodeAt(0);
    let rowStart=parseInt(start.substring(1));
    let rowEnd=parseInt(end.substring(1));
    let result=[];
    for(let i=colStart;i<=colEnd;i++){ 
        for(let j=rowStart;j<=rowEnd;j++){
            result.push(String.fromCharCode(i)+j);
        }
    }
    return result; 
};