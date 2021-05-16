/**Binary Tree Tilt
 * Given the root of a binary tree, return the sum of every tree node's tilt.
 * The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values.
 * If a node does not have a left child, then the sum of the left subtree node values is treated as 0.
 * The rule is similar if there the node does not have a right child.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let findTilt = function(root) {
  let sum = 0;
  let recrusive = function(root) {
    if (!root) {
      return 0;
    }
    let leftSum = recrusive(root.left);
    let rightSum = recrusive(root.right);
    sum += Math.abs(leftSum - rightSum);
    return leftSum + rightSum + root.val;
  };
  recrusive(root);
  return sum;
};
