/** Longest Univalue Path
 * Given the root of a binary tree, return the length of the longest path, where each node
 * in the path has the same value. This path may or may not pass through the root.
 * The length of the path between two nodes is represented by the number of edges between them.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let longestUnivaluePath = function(root) {
  if (!root) return 0;
  let level = 0;
  function helper(parent, current) {
    if (!current) return 0;
    let left = helper(current.val, current.left);
    let right = helper(current.val, current.right);
    level = Math.max(level, left + right);
    return current.val == parent ? Math.max(left, right) + 1 : 0;
  }
  helper(root.val, root);
  return level;
};
