/**
 * Convert a Number to Hexadecimal
 */
let toHex = function(num) {
    if(num==0)return '0';
    let map = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let result='';
    while (num!=0) {
        result = map[(num & 15)] + result; 
            num = (num >>> 4);
    }
    return result;
};
let num = 26;
let res=toHex(num);
console.log(res);