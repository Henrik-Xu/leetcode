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
var isSymmetric = function(root) {
  return isMirror(root, root);
};

let isMirror = function(t1, t2) {
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;

  return (
    t1.val === t2.val &&
    isMirror(t1.left, t2.right) &&
    isMirror(t1.right, t2.left)
  );
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
let left1 = new TreeNode(2);
let right1 = new TreeNode(2);

let left1_1 = new TreeNode(3);
let left1_2 = new TreeNode(4);

let right1_1 = new TreeNode(4);
let right1_2 = new TreeNode(3);

left1.left = left1_1;
left1.right = left1_2;

right1.left = right1_1;
right1.right = right1_2;

root.left = left1;
root.right = right1;

let result = isSymmetric(root);
