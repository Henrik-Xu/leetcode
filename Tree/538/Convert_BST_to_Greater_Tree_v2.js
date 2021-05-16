let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let convertBST = function(root) {
  let sum = 0;
  let recrusive = function(root) {
    if (!root) return;
    recrusive(root.right);
    root.val += sum;
    sum = root.val;
    recrusive(root.left);
  };
  recrusive(root);
  return root;
};
