/**
 * Lowest Common Ancestor of Deepest Leaves
 * Given the root of a binary tree, return the lowest common ancestor of its deepest leaves
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let lcaDeepestLeaves = function(root) {
  let Node = function(node, depth) {
    this.node = node;
    this.depth = depth;
  };
  let dfs = function(root, depth) {
    if (!root) return Node(null, 0);
    let left = dfs(root.left);
    let right = dfs(root.right);
    if (left.depth < right.depth) {
      return new Node(right.node, right.depth + 1);
    } else if (left.depth > right.depth) {
      return new Node(left.node, left.depth + 1);
    }
    return new Node(root, left.depth + 1);
  };
  return dfs(root, 0).node;
};
