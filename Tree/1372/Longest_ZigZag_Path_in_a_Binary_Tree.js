/**
 * Longest ZigZag Path in a Binary Tree
 * Return the longest ZigZag path contained in that tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let longestZigZag = function(root) {
  if (root == null) return -1;
  let max = 0;
  let dfs = function(root, step, isRight) {
    if (!root) return;
    max = Math.max(max, step);
    if (isRight) {
      dfs(root.left, step + 1, false);
      dfs(root.right, 1, true);
    } else {
      dfs(root.right, step + 1, true);
      dfs(root.left, 1, false);
    }
  };
  dfs(root.right, 1, true);
  dfs(root.left, 1, false);
  return max;
};
