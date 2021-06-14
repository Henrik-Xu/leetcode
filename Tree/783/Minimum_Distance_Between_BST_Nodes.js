/** Minimum Distance Between BST Nodes
 * Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let minDiffInBST = function(root) {
  let stack = [];
  let minimum = Number.MAX_VALUE;
  let prev = null;
  let current = root;
  while (current != null || stack.length != 0) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (prev != null) {
      minimum = Math.min(minimum, Math.abs(current.val - prev));
    }
    prev = current.val;
    current = current.right;
  }
  return minimum;
};
