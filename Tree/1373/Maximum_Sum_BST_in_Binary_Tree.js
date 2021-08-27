/**
 * Maximum Sum BST in Binary Tree
 * Given a binary tree root, return the maximum sum of all keys of any sub-tree which is also a Binary Search Tree (BST).
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let maxSumBST = function(root) {
  let maxSum = 0;
  let dfs = function(root) {
    if (root == null) return [Number.MAX_VALUE, Number.NEGATIVE_INFINITY, 0];
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (
      left != null &&
      root != null &&
      root.val > left[1] &&
      root.val < right[0]
    ) {
      let sum = root.val + left[2] + right[2];
      maxSum = Math.max(maxSum, sum);
      let min = Math.min(root.val, left[0]);
      let max = Math.max(root.val, right[1]);
      return [min, max, sum];
    }
    return null;
  };
  dfs(root);
  return maxSum;
};
