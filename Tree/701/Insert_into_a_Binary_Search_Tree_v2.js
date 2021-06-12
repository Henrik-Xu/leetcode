function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  let current = root;
  while (true) {
    if (current.val < val) {
      if (current.right != null) {
        current = current.right;
      } else {
        current.right = new TreeNode(val);
        break;
      }
    } else {
      if (current.left != null) {
        current = current.left;
      } else {
        current.left = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};
