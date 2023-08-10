/**
 * Largest Odd Number in String
 */
var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--)
        if ((num[i] - '0') % 2)
            return num.substr(0, i + 1);
    return '';
};
let num = "52";
let res=largestOddNumber(num);
console.log(res);