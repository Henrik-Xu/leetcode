/**
 * Excel Sheet Column Number
 */
let titleToNumber = function(columnTitle) {
    let res=0;
    for (let i = 0; i < columnTitle.length; i++) {
        res+=(columnTitle[i].charCodeAt(0)-64)*Math.pow(26,columnTitle.length-i-1);
    }
    return res;
};
let columnTitle = "ZY";
let res=titleToNumber(columnTitle);
console.log(res);