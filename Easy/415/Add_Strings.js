/**
 * Add Strings
 */
let addStrings = function(num1, num2) {
    let sb = '';
    let carry = 0;
    let zero='0'.charCodeAt(0);
    for(let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry == 1; i--, j--){
        let x = i < 0 ? 0 : num1.charCodeAt(i)-zero;
        let y = j < 0 ? 0 : num2.charCodeAt(j)-zero;
        sb=((x + y + carry) % 10)+sb;
        carry = Math.floor((x + y + carry) / 10);
    }
    return sb;
};