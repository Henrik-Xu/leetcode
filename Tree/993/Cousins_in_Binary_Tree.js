/**
 * Cousins in Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isCousins = function(root, x, y) {
  function Node(node, parent, depth) {
    this.node = node;
    this.parent = parent;
    this.depth = depth;
  }
  let map = new Map();
  let dfs = function(root, parent, depth) {
    if (!root) return;
    map.set(root.val, new Node(root, parent, depth));
    dfs(root.left, root, depth + 1);
    dfs(root.right, root, depth + 1);
  };
  dfs(root, null, 0);

  let X = map.get(x);
  let Y = map.get(y);
  return X.depth == Y.depth && X.parent != Y.parent;
};
