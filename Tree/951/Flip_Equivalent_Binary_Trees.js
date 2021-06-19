/** Flip Equivalent Binary Trees
 *  Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivelent or false otherwise.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let flipEquiv = function(root1, root2) {
  if (root1 == null && root2 == null) return true;
  if (root1 == null || root2 == null || root1.val != root2.val) return false;
  return (
    (flipEquiv(root1.left, root2.left) &&
      flipEquiv(root1.right, root2.right)) ||
    (flipEquiv(root1.right, root2.left) && flipEquiv(root1.left, root2.right))
  );
};
