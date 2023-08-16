/**
 * Minimum Sum of Four Digit Number After Splitting Digits
 */
var minimumSum = function(num) {
    let first=num%10,second=Math.floor(num/10)%10,third=Math.floor(num/100)%10,fourth=Math.floor(num/1000);
    let arr=[first,second,third,fourth];
    arr.sort((a,b)=>a-b);
    return arr[0]*10+arr[2]+arr[1]*10+arr[3];
};