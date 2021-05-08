/**Invert Binary Tree
 * Given the root of a binary tree, invert the tree, and return its root.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let invertTree = function(root) {
  if (root == null) return null;
  let invert = function(root) {
    if (root == null) return;
    [root.left, root.right] = [root.right, root.left];
    invert(root.left);
    invert(root.right);
  };
  invert(root);
  return root;
};
let root = new TreeNode(4);
let left = new TreeNode(2);
let right = new TreeNode(7);
left.left = new TreeNode(1);
left.right = new TreeNode(3);
right.left = new TreeNode(6);
right.right = new TreeNode(9);
root.left = left;
root.right = right;

let res = invertTree(null);
console.log(res);
