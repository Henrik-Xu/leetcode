let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let findMode = function(root) {
  let res = [];
  let stack = [];
  let max = 1,
    count = 1;
  let prev = null;
  let recrusive = function(root) {
    if (root == null) {
      return;
    }
    recrusive(root.left);
    if (prev != null) {
      if (root.val == prev) {
        count++;
      } else {
        count = 1;
      }
    }
    if (count > max) {
      max = count;
      res = [];
      res.push(root.val);
    } else if (count == max) {
      res.push(root.val);
    }
    prev = root.val;
    recrusive(root.right);
  };
  recrusive(root);
  return res;
};
