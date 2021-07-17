/**
 * Deepest Leaves Sum
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
let deepestLeavesSum = function(root) {
  let deepest = 0;
  let sum = 0;
  let dfs = function(root, depth) {
    if (!root) return;
    if (root.left == null && root.right == null) {
      if (deepest == depth) {
        sum += root.val;
      } else if (depth > deepest) {
        sum = root.val;
        deepest = depth;
      }
    }
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  };
  dfs(root, 0);
  return sum;
};
