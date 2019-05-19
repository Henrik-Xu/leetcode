/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var result = [];
  var index = 0;
  var recursive = function(node, index) {
    if (!node) return;
    if (index >= result.length) result[index] = [];
    result[index].push(node.val);
    recursive(node.left, index + 1);
    recursive(node.right, index + 1);
  };
  recursive(root, 0);
  return result.reverse();
};
