/**
 * Count Good Nodes in Binary Tree
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 * Return the number of good nodes in the binary tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var goodNodes = function(root) {
  let nums = 0;
  let dfs = function(root, max) {
    if (max <= root.val) {
      nums++;
    }
    if (root.right != null) {
      dfs(root.right, Math.max(root.val, max));
    }
    if (root.left != null) {
      dfs(root.left, Math.max(root.val, max));
    }
  };
  dfs(root, Number.NEGATIVE_INFINITY);
  return nums;
};
