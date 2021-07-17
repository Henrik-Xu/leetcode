/**
 * Sum of Nodes with Even-Valued Grandparent
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let sumEvenGrandparent = function(root) {
  let sum = 0;
  let dfs = function(root) {
    if (!root) return;
    if (root.val % 2 == 0) {
      if (root.left != null && root.left.left != null) {
        sum += root.left.left.val;
      }
      if (root.left != null && root.left.right != null) {
        sum += root.left.right.val;
      }
      if (root.right != null && root.right.left != null) {
        sum += root.right.left.val;
      }
      if (root.right != null && root.right.right != null) {
        sum += root.right.right.val;
      }
    }
    dfs(root.left);
    dfs(root.right);
  };
  dfs(root);
  return sum;
};
