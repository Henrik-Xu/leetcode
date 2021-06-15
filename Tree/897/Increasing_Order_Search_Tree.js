/** Increasing Order Search Tree
 *  Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node
 *  in the tree is now the root of the tree, and every node has no left child and only one right child.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let increasingBST = function(root) {
  let ans = new TreeNode(-1);
  let current = ans;
  let dfs = function(root) {
    if (!root) return;
    dfs(root.left);
    root.left = null;
    current.right = root;
    current = root;
    dfs(root.right);
  };
  dfs(root);
  return ans.right;
};
let root = new TreeNode(5);
let left = new TreeNode(3);
let sub = new TreeNode(2);
sub.left = new TreeNode(1);
left.left = sub;
left.right = new TreeNode(4);

let right = new TreeNode(6);
let sub2 = new TreeNode(8);
sub2.left = new TreeNode(7);
sub2.left = new TreeNode(9);
right.right = sub2;

root.left = left;
root.right = right;

let res = increasingBST(root);
console.log(res);
