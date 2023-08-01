/**
 * Make The String Great
 */
var makeGood = function(s) {
    const stack = [''];
    
    for(let c of s) {
        let top = stack[stack.length-1];
        if(top.toLowerCase() === c.toLowerCase() && top !== c) stack.pop()
        else stack.push(c);
    }
    return stack.join('');
};
let s = "leEeetcode";
let res=makeGood(s);
console.log(res);