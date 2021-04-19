function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let preorderTraversal = function(root) {
  if (!root) return;
  let stack = [];
  let recrusive = function(root) {
    if (!root) return;
    stack.push(root.val);
    recrusive(root.left);
    recrusive(root.right);
  };
  recrusive(root);
  return stack;
};

let root = new TreeNode(1);
let right = new TreeNode(2);
right.left = new TreeNode(3);

root.right = right;

let res = preorderTraversal(root);
console.log(res);
