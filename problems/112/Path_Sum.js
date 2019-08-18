/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;

  if (root.left == null && root.right == null) {
    return sum == root.val;
  } else {
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};

function TreeNode(val) {
  this.val = val;

  this.left = this.right = null;
}

let root = new TreeNode(5);

let left = new TreeNode(4);
let right = new TreeNode(8);

let left_1 = new TreeNode(11);

let right_1_1 = new TreeNode(13);
let right_1_2 = new TreeNode(4);

let left_2_1 = new TreeNode(7);
let left_2_2 = new TreeNode(2);

let right_3 = new TreeNode(1);

right_1_2.right = right_3;
right.left = right_1_1;
right.right = right_1_2;

left_1.left = left_2_1;
left_1.right = left_2_2;
left.left = left_1;

root.left = left;
root.right = right;

let result = hasPathSum(root, 22);
console.log(result);
