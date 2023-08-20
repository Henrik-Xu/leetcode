/**
 * Check if Number Has Equal Digit Count and Digit Value
 */
var digitCount = function(num) {
    let count=new Array(10).fill(0);
    for (let index = 0; index < num.length; index++) {
        count[num[index]]++;
    }
    for (let index = 0; index < num.length; index++) {
        if(count[index]!=num[index])
            return false;
    }
    return true
};