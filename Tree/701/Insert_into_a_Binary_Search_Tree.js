/**
 * Insert into a Binary Search Tree
 * You are given the root node of a binary search tree (BST) and a value to insert into the tree.
 * Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let insertIntoBST = function(root, val) {
  if (!root) return new TreeNode(val);
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
};
