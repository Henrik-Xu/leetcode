/**
 * Maximum 69 Number
 */
var maximum69Number  = function(num) {
    let s=num.toString().replace('6','9');

    return parseInt(s);
};
let num = 9669;
let res=maximum69Number(num);
console.log(res);