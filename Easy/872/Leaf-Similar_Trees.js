/**
 * Leaf-Similar Trees
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
let leafSimilar = function (root1, root2) {
    let equal = function (arr1, arr2) {
      if (arr1.length != arr2.length) return false;
      return arr1.every((value, index) => arr2[index] == value);
    }
    let dfs = function (root, arr) {
      if (!root) return;
      if (root.left == null && root.right == null) {
        arr.push(root.val);
      }
      dfs(root.left, arr);
      dfs(root.right, arr);
    }
    let arr1 = [];
    let arr2 = [];
    dfs(root1, arr1);
    dfs(root2, arr2)
    return equal(arr1, arr2);
  };