/**
 * Number Complement
 */
let findComplement = function(num) {
    let str=num.toString(2);
    let sum=0;
    for (let i = 0; i < str.length; i++) {
        sum+=Math.pow(2,i);
    }
    return sum-num;
};
let num = 5;
let res=findComplement(num);
console.log(res);