/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  return test(root) >= 0;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let test = function(node) {
  if (node == null) return 0;

  let left = test(node.left);
  if (left < 0) return -1;

  let right = test(node.right);
  if (right < 0) return -1;

  if (Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
};

// [3,9,20,null,null,15,7]
let root = new TreeNode(3);

let left = new TreeNode(9);

let right = new TreeNode(20);
let right_1 = new TreeNode(15);
let right_2 = new TreeNode(7);

right.left = right_1;
right.right = right_2;

root.left = left;
root.right = right;

let result = isBalanced(root);
