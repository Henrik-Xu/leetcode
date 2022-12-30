/**
 * Baseball Game
 */
let calPoints = function (operations) {
  let stack = [];
  for (const operation of operations) {
    if (operation == '+') {
      let top = stack.pop();
      let newTop = top + stack[stack.length - 1];
      stack.push(top);
      stack.push(newTop);
    } else if (operation == 'C') {
      stack.pop();
    } else if (operation == 'D') {
      stack.push(2 * stack[stack.length - 1]);
    } else {
      stack.push(parseInt(operation));
    }
  }
  return stack.reduce((previous, current) => previous + current, 0);
};
let ops = ["5", "2", "C", "D", "+"];
let res = calPoints(ops);
console.log(res);
