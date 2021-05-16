let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let findBottomLeftValue = function(root) {
  if (!root) return;
  let maxDepth = 0;
  let res = root.val;
  let recrusive = function(root, depth) {
    if (root.left == null && root.right == null && depth > maxDepth) {
      maxDepth = depth;
      res = root.val;
      return res;
    }
    if (root.left) {
      recrusive(root.left, depth + 1);
    }
    if (root.right) {
      recrusive(root.right, depth + 1);
    }
  };
  recrusive(root, 0);
  return res;
};
let root = new TreeNode(2);
root.left = new TreeNode(1);
root.right = new TreeNode(3);

let res = findBottomLeftValue(new TreeNode(1));
console.log(res);
