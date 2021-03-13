/**
 * Given the root of a binary tree, check whether it is a mirror of itself(i.e.);
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isSymmetric = function(root) {
  return helper(root, root);
};
let helper = function(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left);
};

let r1 = new TreeNode(1);
let left = new TreeNode(2);
left.left = new TreeNode(3);
left.right = new TreeNode(4);

let right = new TreeNode(2);
right.left = new TreeNode(4);
right.right = new TreeNode(3);

r1.left = left;
r1.right = right;

let result = isSymmetric(r1);
console.log(result);
