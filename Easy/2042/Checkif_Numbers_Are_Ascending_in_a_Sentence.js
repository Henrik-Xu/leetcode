/**
 * Check if Numbers Are Ascending in a Sentence
 */
var areNumbersAscending = function (s) {
    let nums = s
        .split(' ')
        .map((x) => +x)                         //     try to convert number, else it will be NaN
        .filter((x) => x);                      //     remove NaN, now only numbers remain

    for (let i = 1; i < nums.length; i++)
        if (nums[i - 1] >= nums[i]) {
            return false;                       //     non ascending - fail
        }

    return true; // good
};
let s="sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";
let res=areNumbersAscending(s);
console.log(res);