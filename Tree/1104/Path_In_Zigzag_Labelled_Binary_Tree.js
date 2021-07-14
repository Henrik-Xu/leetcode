/**
 * Path In Zigzag Labelled Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var pathInZigZagTree = function(label) {
  let stack = [];
  stack.unshift(label);
  while (label != 1) {
    let d = Math.floor(Math.log(label) / Math.log(2));
    let offset = Math.pow(2, d + 1) - 1 - label;
    label = Math.floor((Math.pow(2, d) + offset) / 2);
    stack.unshift(label);
  }
  return stack;
};
let res = pathInZigZagTree(14);
console.log(res);
