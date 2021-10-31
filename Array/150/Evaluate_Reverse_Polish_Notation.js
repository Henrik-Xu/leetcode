/**
 *  Evaluate Reverse Polish Notation
 *  Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *  Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 */
let evalRPN = function(tokens) {
  let a, b;
  const evaluate = {
    "+": () => a + b,
    "-": () => a - b,
    "*": () => a * b,
    "/": () => ~~(a / b)
  };
  let stack = [];
  for (const t of tokens) {
    if (evaluate[t]) {
      b = stack.pop();
      a = stack.pop();
      stack.push(evaluate[t]());
    } else {
      stack.push(parseInt(t));
    }
  }
  return stack.pop();
};
let tokens = ["2", "1", "+", "3", "*"];
let res = evalRPN(tokens);
console.log(res);
