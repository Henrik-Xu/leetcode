/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.minStack = [];
  this.minValue = Number.MIN_VALUE;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.minStack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.minStack[this.minStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return Math.min(...this.minStack);
};

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
