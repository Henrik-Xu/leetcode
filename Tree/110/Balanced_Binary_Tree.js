/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as :
 *  a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isBalanced = function(root) {
  if (!root) return true;
  let maxDepth = function(root) {
    if (!root) return 0;
    let left = maxDepth(root.left);
    if (left < 0) return -1;

    let right = maxDepth(root.right);
    if (right < 0) return -1;
    if (Math.abs(left - right) > 1) {
      return -1;
    }
    return Math.max(left, right) + 1;
  };
  return maxDepth(root) >= 0;
};

// [3,9,20,null,null,15,7]
let r1 = new TreeNode(3);
r1.left = new TreeNode(9);
let right = new TreeNode(20);
right.left = new TreeNode(15);
right.right = new TreeNode(7);
r1.right = right;
let result1 = isBalanced(r1);
console.log(result1);

let r2 = new TreeNode(1);
let left1 = new TreeNode(2);
let left2 = new TreeNode(3);
let left3 = new TreeNode(4);
let left4 = new TreeNode(5);
left3.left = left4;
left2.left = left3;
left1.left = left2;
r2.left = left1;
let result2 = isBalanced(r2);
console.log(result2);
