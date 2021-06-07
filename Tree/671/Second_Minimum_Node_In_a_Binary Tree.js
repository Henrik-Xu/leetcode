/** Second Minimum Node In a Binary Tree
 * Given a non-empty special binary tree consisting of nodes with the non-negative value,
 * where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes,
 * then this node's value is the smaller value among its two sub-nodes. More formally, the property
 * root.val = min(root.left.val, root.right.val) always holds.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let findSecondMinimumValue = function(root) {
  if (!root) return -1;
  if (root.left == null && root.right == null) {
    return -1;
  }
  let left = root.left.val;
  let right = root.right.val;
  if (left == root.val) {
    left = findSecondMinimumValue(root.left);
  }
  if (right == root.val) {
    right = findSecondMinimumValue(root.right);
  }
  if (left != -1 && right != -1) {
    return Math.min(left, right);
  } else if (left != -1) {
    return left;
  } else {
    return right;
  }
};
