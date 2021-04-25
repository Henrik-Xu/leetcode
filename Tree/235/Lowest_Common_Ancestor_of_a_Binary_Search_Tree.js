/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let lowestCommonAncestor = function(root, p, q) {
  if (!root) return;
  while (root != null) {
    if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else {
      return root;
    }
  }
};
