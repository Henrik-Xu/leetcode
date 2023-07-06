/**
 * Find Mode in Binary Search Tree
 * Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let findMode = function (root) {
    let res = [];
    let max = 1, count = 1;
    let prev = null;
    let recrusive = function (root) {
      if (root == null) {
        return;
      }
      recrusive(root.left);
      if (prev != null) {
        if (root.val == prev) {
          count++;
        } else {
          count = 1;
        }
      }
      if (count > max) {
        max = count;
        res = [];
        res.push(root.val);
      } else if (count == max) {
        res.push(root.val);
      }
      prev = root.val;
      recrusive(root.right);
    }
    recrusive(root);
    return res;
  }