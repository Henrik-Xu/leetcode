/** Smallest Subtree with all the Deepest Nodes
 *  Given the root of a binary tree, the depth of each node is the shortest distance to the root.
 *  Return the smallest subtree such that it contains all the deepest nodes in the original tree.
 *  A node is called the deepest if it has the largest depth possible among any node in the entire tree.
 *  The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let subtreeWithAllDeepest = function(root) {
  let dfs = function(root) {
    if (root == null) {
      return -1;
    }
    let left = dfs(root.left);
    let right = dfs(root.right);
    return Math.max(left, right) + 1;
  };
  let findNode = function(root, deep) {
    if (root == null || deep == depth) {
      return root;
    }
    let left = findNode(root.left, deep + 1);
    let right = findNode(root.right, deep + 1);
    if (left != null && right != null) return root;
    if (left != null) return left;
    if (right != null) return right;
    return null;
  };
  let depth = dfs(root);
  return findNode(root, 0);
};
