/**
 * Separate the Digits in an Array
 */
var separateDigits = function(nums) {
    let res=[];
    for (const num of nums) {
        let temp = num.toString();
        for (const char of temp) {
            res.push(parseInt(char));
        }
    }
    return res;
};
