/**
 * Perfect Number
 */
let checkPerfectNumber = function(num) {
    if (num == 1) return false;    
    let sum = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            sum += i + num / i;
        }
    }
    sum++;
    
    return sum == num;
}
let num = 25;
let res=checkPerfectNumber(num);
console.log(res);