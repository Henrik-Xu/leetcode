/**
 * Search in a Binary Search Tree
 * You are given the root of a binary search tree (BST) and an integer val.
 * Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let searchBST = function(root, val) {
  if (!root) return null;
  if (root.val > val) {
    return searchBST(root.left, val);
  } else if (root.val < val) {
    return searchBST(root.right, val);
  } else {
    return root;
  }
};
