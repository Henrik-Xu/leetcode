/**
 * Given the root of a binary tree, determine if it is a valid binary search tree(BST)
 * A valid BST is defined as follows:
 *  The left subtree of a node contains only nodes with keys less than node's key
 *  The right subtree of a node contains only node with keys greater than the node's key
 *  Both the left and right subtrees must also be binary search trees.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isValidBST = function(root) {
  return helper(root, null, null);
  2;
};

let helper = function(node, lower, upper) {
  if (node == null) return true;
  let val = node.val;
  if (lower != null && lower >= val) return false;
  if (upper != null && upper <= val) return false;
  return helper(node.left, lower, val) && helper(node.right, val, upper);
};

let ex1 = new TreeNode(2);
ex1.left = new TreeNode(1);
ex1.right = new TreeNode(3);
let r1 = isValidBST(ex1);
console.log(r1);

let ex2 = new TreeNode(5);
ex2.left = new TreeNode(1);
let right = new TreeNode(4);
right.left = new TreeNode(3);
right.right = new TreeNode(6);
ex2.right = right;
let r2 = isValidBST(ex2);
console.log(r2);

let ex3 = new TreeNode(5);
ex3.left = new TreeNode(4);
let right3 = new TreeNode(6);
right3.left = new TreeNode(3);
right3.right = new TreeNode(7);
ex3.right = right3;
let r3 = isValidBST(ex3);
console.log(r3);
