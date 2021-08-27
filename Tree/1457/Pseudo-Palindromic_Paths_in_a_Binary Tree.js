/**
 * Pseudo-Palindromic Paths in a Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let pseudoPalindromicPaths = function(root) {
  let count = 0;
  let dfs = function(root, path) {
    if (!root) return;
    path = path ^ (1 << root.val);
    if (root.left == null && root.right == null) {
      if (path & (path - 1 == 0)) {
        count++;
      }
    }
    dfs(root.left, path);
    dfs(root.right, path);
  };
  dfs(root, 0);
  return count;
};
