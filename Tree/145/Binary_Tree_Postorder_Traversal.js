/**
 * Binary Tree Postorder Travesal
 * Given the root of a binary tree, return the postorder travesal of its nodes' values.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let postorderTraversal = function(root) {
  if (!root) return [];
  let res = [];
  let recrusive = function(root) {
    if (!root) return;
    recrusive(root.left);
    recrusive(root.right);
    res.push(root.val);
  };
  recrusive(root);
  return res;
};

let root = new TreeNode(1);
let left = new TreeNode(2);
left.left = new TreeNode(4);
left.right = new TreeNode(5);

let right = new TreeNode(3);
right.left = new TreeNode(6);
right.right = new TreeNode(7);

root.left = left;
root.right = right;

let res = postorderTravesal(root);
console.log(res);
