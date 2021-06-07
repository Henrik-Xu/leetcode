/**
 * Trim a Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let trimBST = function(root, low, high) {
  if (!root) return null;
  if (root.val > high) return trimBST(root.left, low, high);
  if (root.val < low) return trimBST(root.right, low, high);

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};
