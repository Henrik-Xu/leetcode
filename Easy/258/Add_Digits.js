/**
 * Add Digits
 * Follow up: Could you do it without any loop/recursion in O(1) runtime?
 */
let addDigits = function(num) {
    if(num==0)return 0;
    return num%9==0?9:num%9;
};
let num=1001;
let res=addDigits(num);
console.log(res);