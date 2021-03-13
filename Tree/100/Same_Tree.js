/**
 * Given the roots of two binary trees p and q, write a function to check if they are the same or not.
 * Two binary trees are considered the same if they are stuctually identical, and nodes have the same value.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isSameTree = function(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
let p = new TreeNode(1);
p.left = new TreeNode(2);
p.right = new TreeNode(3);

let q = new TreeNode(1);
q.left = new TreeNode(2);
q.right = new TreeNode(3);

let r1 = isSameTree(p, q);
console.log(r1);

let p1 = new TreeNode(1);
p1.left = new TreeNode(2);

let q1 = new TreeNode(1);
q1.right = new TreeNode(2);
let r2 = isSameTree(p1, q1);
console.log(r2);
