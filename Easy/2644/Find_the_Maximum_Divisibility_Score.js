/**
 * Find the Maximum Divisibility Score
 */
var maxDivScore = function (nums, divisors) {
    let set = new Set();
    let max = -1, divisor = -1, min = -1;
    for (let i = 0; i < divisors.length; i++) {
        if (set.has(divisors[i])) continue;
        set.add(divisors[i]);
        if (min == -1) {
            min = divisors[i];
        } else {
            min = Math.min(divisors[i], min);
        }
        let score=0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] % divisors[i] == 0) {
                score++;
                if (score > max) {
                    max = score;
                    divisor = divisors[i];
                } else if (score == max) {
                    divisor = Math.min(divisor, divisors[i]);
                }
            }
        }
    }
    if(max==-1 && divisor==-1)return min;
    return divisor;
};
let nums = [4,7,9,3,9], divisors = [5,2,3];
let res=maxDivScore(nums,divisors);
console.log(res);