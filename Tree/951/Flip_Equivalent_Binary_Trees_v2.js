/**
 * Canonical Traversal
 * Flip each node so that the left child is smaller than the right, and call this the canonical representation.
 * All equivalent trees have exactly one canonical representation.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let flipEquiv = function(root1, root2) {
  let arr1 = [];
  let arr2 = [];
  let dfs = function(root, arr) {
    if (!root) return;
    arr.push(root.val);
    let left = root.left != null ? root.left.val : -1;
    let right = root.right != null ? root.right.val : -1;
    if (left < right) {
      dfs(root.left, arr);
      dfs(root.right, arr);
    } else {
      dfs(root.right, arr);
      dfs(root.left, arr);
    }
    arr.push(null);
  };
  dfs(root1, arr1);
  dfs(root2, arr2);
  return (
    arr1.length == arr2.length &&
    arr1.every((value, index) => arr2[index] == value)
  );
};

let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);

let root2 = new TreeNode(1);
let sub = new TreeNode(2);
sub.left = new TreeNode(3);
root2.left = sub;

let res = flipEquiv(root1, root2);
console.log(res);
