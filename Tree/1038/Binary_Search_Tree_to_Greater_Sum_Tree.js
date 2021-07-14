/**
 * Binary Search Tree to Greater Sum Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var bstToGst = function(root) {
  let step = 0;
  let dfs = function(root) {
    if (!root) return;
    dfs(root.right);
    root.val += step;
    step = root.val;
    dfs(root.left);
  };
  dfs(root);
  return root;
};
