/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let minDepth = function(root) {
  if (root == null) return 0;

  let L = Math.min(minDepth(root.left));
  let R = Math.max(minDepth(root.right));
  return 1 + (Math.min(L, R) || Math.max(L, R));
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// [3,9,20,null,null,15,7]
// let root = new TreeNode(3);

// let left = new TreeNode(9);

// let right = new TreeNode(20);
// let right_1 = new TreeNode(15);
// let right_2 = new TreeNode(7);

// right.left = right_1;
// right.right = right_2;

// root.left = left;
// root.right = right;

// CASE 2
let root = new TreeNode(1);

let left = new TreeNode(2);

root.left = left;

let result = minDepth(root);
