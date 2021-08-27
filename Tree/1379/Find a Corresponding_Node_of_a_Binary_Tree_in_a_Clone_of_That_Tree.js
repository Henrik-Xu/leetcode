/**
 * Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 * Given two binary trees original and cloned and given a reference to a node target in the original tree.
 * The cloned tree is a copy of the original tree.
 * Return a reference to the same node in the cloned tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let getTargetCopy = function(original, cloned, target) {
  let res = null;
  let dfs = function(original, cloned, target) {
    if (original == null) return;
    dfs(original.left, cloned.left, target);
    dfs(original.right, cloned.right, target);
    if (original == target) {
      res = cloned;
    }
  };
  dfs(original, cloned, target);
  return res;
};
