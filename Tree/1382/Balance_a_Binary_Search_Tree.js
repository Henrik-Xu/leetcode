/**
 * Balance a Binary Search Tree
 * Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
 * A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let balanceBST = function(root) {
  let arr = [];
  let dfs = function(root) {
    if (!root) return;
    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  };
  dfs(root);
  let constructTree = function(arr) {
    if (arr == null || arr.length == 0) return null;
    let middle = parseInt(arr.length / 2);
    let root = new TreeNode(arr[middle]);
    root.left = constructTree(arr.slice(0, middle));
    root.right = constructTree(arr.slice(middle + 1));
    return root;
  };
  return constructTree(arr);
};
