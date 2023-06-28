/**
 * Excel Sheet Column Title
 */
let convertToTitle = function(columnNumber) {
    let columnTitle='';
    while (columnNumber>0) {
        let remainder=columnNumber%26==0?26:columnNumber%26;
        columnNumber=(columnNumber-remainder)/26;
        columnTitle=String.fromCharCode(remainder+64)+columnTitle;
    }
    return columnTitle;
};
let columnNumber = 701;
let res=convertToTitle(columnNumber);
console.log(res);