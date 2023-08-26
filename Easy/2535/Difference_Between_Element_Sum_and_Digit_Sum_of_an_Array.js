/**
 * Difference Between Element Sum and Digit Sum of an Array
 */
var differenceOfSum = function(nums) {
    let elementSum=0,digitSum=0;
    for (const num of nums) {
        elementSum+=num;
        digitSum+=digitsSum(num);
    }
    return Math.abs(elementSum-digitSum);
};
let digitsSum=(num)=>{
    let sum=0;
    let digits=num.toString().split('');
    for(let i=0;i<digits.length;i++){
        sum+=parseInt(digits[i]);
    }
    return sum;
}
let nums =
[1,15,6,3];
let res=differenceOfSum(nums);
console.log(res);