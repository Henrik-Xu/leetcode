/**
 * Delete Leaves With a Given Value
 * Given a binary tree root and an integer target, delete all the leaf nodes with value target.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let removeLeafNodes = function(root, target) {
  if (!root) return null;
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);
  if (root.left == null && root.right == null && root.val == target) {
    return null;
  }
  return root;
};

let root = new TreeNode(1);

let left = new TreeNode(2);
left.left = new TreeNode(2);

let right = new TreeNode(3);
right.left = new TreeNode(2);
right.right = new TreeNode(4);

root.left = left;
root.right = right;

let res = removeLeafNodes(root, 2);
console.log(res);
