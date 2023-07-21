/**
 * Height Checker
 */
let heightChecker = function (heights) {
    let count = new Array(101).fill(0);
    for (const height of heights) {
        count[height]++;
    }
    let index = 1, result = 0;
    for (const height of heights) {
        while (count[index] == 0) {
            index++;
        }
        if (index != height) {
            result++;
        }
        count[index]--;
    }
    return result;
};
let heights = [1,1,4,2,1,3];
let res=heightChecker(heights);
console.log(res);