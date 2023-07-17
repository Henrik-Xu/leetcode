/**
 * Increasing Order Search Tree
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
 * @return {TreeNode}
 */
let increasingBST = function (root) {
    let ans = new TreeNode(-1);
    let current = ans;
    let dfs = function (root) {
      if (!root) return;
      dfs(root.left);
      root.left = null;
      current.right = root;
      current = root;
      dfs(root.right);
    }
    dfs(root);
    return ans.right;
  };