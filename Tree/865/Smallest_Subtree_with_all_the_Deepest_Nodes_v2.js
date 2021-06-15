function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function Node(node, depth) {
  this.node = node;
  this.depth = depth;
}
let subtreeWithAllDeepest = function(root) {
  let dfs = function(root) {
    if (root == null) return new Node(null, 0);
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (left.depth > right.depth) {
      return new Node(left.node, left.depth + 1);
    } else if (left.depth < right.depth) {
      return new Node(right.node, right.depth + 1);
    }
    return new Node(root, left.depth + 1);
  };
  return dfs(root).node;
};
