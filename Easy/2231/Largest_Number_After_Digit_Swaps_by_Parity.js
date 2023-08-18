/**
 * Largest Number After Digit Swaps by Parity
 */
var largestInteger = function(num) {
    let odd = [];
    let even = [];
    let result = 0;
    let s=num.toString();
    for(let i = 0; i < s.length; i++){
        if(s[i] % 2 === 0){
            even.push(s[i]);
        } else {
            odd.push(s[i]);
        }
    }
    even.sort((a,b) => a-b);
    odd.sort((a,b) => a-b);
    for(let i = 0; i < s.length; i++){
        if(s[i] % 2 === 0){
            result = result*10+parseInt(even.pop());
        } else {
            result = result*10+parseInt(odd.pop());
        }
    }
    return result;
};
let num=247;
let res=largestInteger(num);
console.log(res);