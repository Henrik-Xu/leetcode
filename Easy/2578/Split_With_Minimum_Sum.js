/**
 * Split With Minimum Sum
 */
var splitNum = function (n) {
    // Convert to string
    let str = "" + n;

    // Collect digits, convert to numbers, sort ascending
    let arr = str
        .split("")
        .map((x) => +x)
        .sort((a, b) => a - b);

    // Concatenate into 2 strings, alternatively
    let str1 = "";
    let str2 = "";

    let i = 0;
    for (let digit of arr) {
        if (i % 2 === 0) {
            str1 += digit;
        } else {
            str2 += digit;
        }
        i++;
    }

    // Convert 2 strings to numbers, add & return
    return +str1 + +str2;
};