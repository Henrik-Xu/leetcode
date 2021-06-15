/** Leaf-Similar Trees
 *  Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let leafSimilar = function(root1, root2) {
  let equal = function(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    return arr1.every((value, index) => arr2[index] == value);
  };
  let dfs = function(root, arr) {
    if (!root) return;
    if (root.left == null && root.right == null) {
      arr.push(root.val);
    }
    dfs(root.left, arr);
    dfs(root.right, arr);
  };
  let arr1 = [];
  let arr2 = [];
  dfs(root1, arr1);
  dfs(root2, arr2);
  return equal(arr1, arr2);
};
