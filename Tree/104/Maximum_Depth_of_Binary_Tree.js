/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from  the root node down to the farthest leaf node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

let root = new TreeNode(3);
root.left = new TreeNode(9);
let right = new TreeNode(20);
right.left = new TreeNode(15);
right.right = new TreeNode(7);
root.right = right;

let r1 = maxDepth(root);
console.log(r1);
