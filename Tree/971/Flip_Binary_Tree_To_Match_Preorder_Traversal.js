/**
 * Flip Binary Tree To Match Preorder Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let flipMatchVoyage = function(root, voyage) {
  let flipped = [];
  let index = 0;
  let dfs = function(root, voyage) {
    if (!root) return true;
    if (!root.val != voyage[index++]) {
      return false;
    }
    if (
      index < flipped.length &&
      root.left != null &&
      root.left.val != voyage[index]
    ) {
      flipped.push(root.val);
      return dfs(root.right) && dfs(root.left);
    }
    return dfs(root.left) && dfs(root.right);
  };
  return dfs(root, voyage) ? flipped : [-1];
};
