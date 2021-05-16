/**Subtree of Another Tree
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with
 * the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants.
 * The tree tree could also be considered as a subtree of itself.
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let isSubtree = function(root, subRoot) {
  let isSame = function(t1, t2) {
    if (t1 == null && t2 == null) return true;
    if (t1 == null || t2 == null) return false;
    if (t1.val != t2.val) return false;
    return isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
  };
  if (root == null && subRoot == null) return true;
  if (root == null || subRoot == null) return false;
  return (
    isSame(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};
