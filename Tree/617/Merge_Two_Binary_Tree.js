/**  Merge Two Binary Trees
 * You are given two binary trees root1 and root2.
 * Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
 * You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up
 * as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.
 *
 * Return the merged tree.
 *
 * Note: The merging process must start from the root nodes of both trees.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let mergeTrees = function(root1, root2) {
  if (root1 == null && root2 == null) return null;
  let val = (root1 == null ? 0 : root1.val) + (root2 == null ? 0 : root2.val);
  let node = new TreeNode(val);
  node.left = mergeTrees(
    root1 == null ? null : root1.left,
    root2 == null ? null : root2.left
  );
  node.right = mergeTrees(
    root1 == null ? null : root1.right,
    root2 == null ? null : root2.right
  );
  return node;
};
