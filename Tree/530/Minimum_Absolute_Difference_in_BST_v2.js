let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let getMinimumDifference = function(root) {
  if (!root) return;
  let min = Number.MAX_VALUE;
  let prev = null;
  let recrusive = function(root) {
    if (!root) return;
    recrusive(root.left);
    if (prev != null) {
      if (min > root.val - prev) {
        min = root.val - prev;
      }
    }
    prev = root.val;
    recrusive(root.right);
  };
  recrusive(root);
  return min;
};

let root = new TreeNode(4);
let left = new TreeNode(2);
let right = new TreeNode(6);
left.left = new TreeNode(1);
left.right = new TreeNode(3);
root.left = left;
root.right = right;

let res = getMinimumDifference(root);
console.log(res);
