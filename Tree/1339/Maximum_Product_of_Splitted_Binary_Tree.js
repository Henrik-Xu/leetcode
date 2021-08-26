/**
 * Maximum Product of Splitted Binary Tree
 * Given the root of a binary tree, split the binary tree into two subtrees by removing one edge such that the product of the sums of the subtrees is maximized.
 * Return the maximum product of the sums of the two subtrees. Since the answer may be too large, return it modulo 109 + 7.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let maxProduct = function(root) {
  let res = 0,
    total = 0;
  sub = 0;
  let s = function(root) {
    if (root == null) return 0;
    sub = root.val + s(root.left) + s(root.right);
    res = Math.max(res, sub * (total - sub));
    return sub;
  };
  total = s(root);
  s(root);
  return parseInt(res % parseInt(10 ** 9 + 7));
};

let root = new TreeNode(1);

let left = new TreeNode(2);
left.left = new TreeNode(4);
left.right = new TreeNode(5);

let right = new TreeNode(3);
right.left = new TreeNode(6);

root.left = left;
root.right = right;

let res = maxProduct(root);
console.log(res);
