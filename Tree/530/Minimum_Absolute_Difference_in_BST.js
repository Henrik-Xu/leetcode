/**Minimum Absolute Difference in BST
 * Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let getMinimumDifference = function(root) {
  if (!root) return;
  let current = root;
  let prev = null;
  let minDiff = Number.MAX_VALUE;
  let stack = [];
  while (current != null || stack.length != 0) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (prev != null) {
      minDiff = current.val - prev > minDiff ? minDiff : current.val - prev;
    }
    prev = current.val;
    current = current.right;
  }
  return minDiff;
};
let root = new TreeNode(4);
let left = new TreeNode(2);
let right = new TreeNode(6);
left.left = new TreeNode(1);
left.right = new TreeNode(3);
root.left = left;
root.right = right;

let res = getMinimumDifference(root);
console.log(res);
