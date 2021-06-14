/** Binary Tree Pruning
 *  Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.
 *  A subtree of a node node is node plus every node that is a descendant of node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let pruneTree = function(root) {
  if (!root) return null;
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  if (root.left == null && root.right == null && root.val == 0) {
    return null;
  }
  return root;
};

let root = new TreeNode(1);

let left = new TreeNode(0);
left.left = new TreeNode(0);
left.right = new TreeNode(0);

let right = new TreeNode(1);
right.left = new TreeNode(1);
right.right = new TreeNode(1);

root.left = left;
root.right = right;

let res = pruneTree(root);
console.log(res);
