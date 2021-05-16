/**Find Bottom Left Tree Value
 * Given the root of a binary tree, return the leftmost value in the last row of the tree.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let findBottomLeftValue = function(root) {
  if (!root) return;
  let current = root;
  let stack = [current];
  while (stack.length != 0) {
    current = stack.shift();
    if (current.right != null) {
      stack.push(current.right);
    }
    if (current.left != null) {
      stack.push(current.left);
    }
  }
  return current.val;
};
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

let res = findBottomLeftValue(root);
console.log(res);
