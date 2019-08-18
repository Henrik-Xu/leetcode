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
var minDepth = function(root) {};

let test = function(node, len) {
  if (node == null) return 0;

  len++;
  let left = test(node.left, len);

  len++;
  let right = test(node.right.len);
};
