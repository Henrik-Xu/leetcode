/**
 * Evaluate Reverse Polish Notation
 */
var evalRPN = function(tokens) {
    let a,b;
    const evaluate =
    {
        "+": () => a + b,
        "-": () => a - b,
        "*": () => a * b,
        "/": () => ~~(a / b)
    }
    let stack=[];
    for (const token of tokens) {
        if(evaluate[token]){
            b=stack.pop(),a=stack.pop();
            stack.push(evaluate[token]());
        }else{
            stack.push(parseInt(token));
        }
    }
    return stack.pop();
};
let tokens =
["4","13","5","/","+"];
let res=evalRPN(tokens);
console.log(res);