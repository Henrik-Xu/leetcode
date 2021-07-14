/**
 * Maximum Binary Tree II
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var insertIntoMaxTree = function(root, val) {
  if (root != null && root.val > val) {
    root.right = insertIntoMaxTree(root.right, val);
    return root;
  }
  let current = new TreeNode(val);
  current.left = root;
  return current;
};
