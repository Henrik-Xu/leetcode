/**
 * Sum of Root To Leaf Binary Numbers
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let sumRootToLeaf = function(root) {
  let sum = 0;
  let dfs = function(root, s) {
    if (!root) return;
    s += root.val;
    if (root.left == null && root.right == null) {
      sum += parseInt(s, 2);
    }
    dfs(root.left, s);
    dfs(root.right, s);
  };
  dfs(root, "");
  return sum;
};
